import * as React from "react"
import { Override, Data } from "framer"
import { url } from "framer/resource"
// @ts-ignore
import { Text } from "@framer/steveruizok.education/code"
import { ACCESS_TOKEN } from "./access"
import {
    addLine,
    getPredictions,
    updateRoute,
    distanceInKilometers,
} from "./map-actions"

// State --------------------------------

const appState = Data({
    map: null as any,
    loading: false,
    distance: 0,
    predictionsOpen: false,
    query: "",
    userLocation: [4.887827, 52.369793],
    location: [4.887827, 52.369793],
    predictions: [],
    route: [],
    markers: [] as any,
})

// Callbacks --------------------------------

// User location

const getUserLocation = () => {
    return new Promise<Position>((resolve, reject) => {
        if (navigator && !navigator.userAgent.includes("FramerX")) {
            appState.loading = true
            navigator.geolocation.getCurrentPosition(
                position => {
                    appState.loading = false
                    resolve(position)
                },
                err => {
                    appState.loading = false
                    console.log("Error: " + err.message)
                }
            )
        } else {
            const previewURL = url()
            const openPrompt = window.prompt(
                "Can't do this in Framer X. Open this project in browser?",
                previewURL
            )
            if (openPrompt) window.open(previewURL)
            reject()
        }
    })
}

const showUserLocation = async () => {
    const position = await getUserLocation()
    const { longitude, latitude } = position.coords
    appState.location = appState.userLocation
    updateRoute(appState)
}

const forceUserLocation = () => {
    const { lng, lat } = appState.map.getCenter()
    appState.userLocation = [lng, lat]
    updateRoute(appState)
}

// Map Events

const setMapListener = map => {
    appState.map = map

    // Add a line to the map
    map.on("load", () => addLine(appState))

    // Update the map's location
    map.on("click", async event => {
        // Center map from touch location
        const { lng, lat } = event.lngLat
        appState.location = [lng, lat]

        // Update the walking route
        updateRoute(appState)
    })
}

// Search / Predictions

const handleFocus = () => {
    appState.predictionsOpen = true
    handleQuery(appState.query)
}

const handleQuery = async query => {
    if (!ACCESS_TOKEN) return

    if (appState.predictionsOpen && query.length > 3) {
        appState.query = query
        appState.predictions = await getPredictions(query)
    }
}

const showPrediction = prediction => {
    const { center } = prediction
    appState.location = center
    clearPredictions()

    if (distanceInKilometers(appState.location, appState.userLocation) > 100) {
        appState.userLocation = appState.location
    }
    updateRoute(appState)
}

const clearPredictions = () => {
    appState.predictionsOpen = false
    appState.predictions = []
}

// Overrides ------------------------------------

export function TextInput(): Override {
    return {
        value: appState.query,
        onFocus: handleFocus,
        onValueChange: handleQuery,
    }
}

export function Map(): Override {
    const [longitude, latitude] = appState.location
    return {
        accessToken: ACCESS_TOKEN,
        longitude,
        latitude,
        zoom: 14,
        onTap: clearPredictions,
        markers: [
            { center: appState.location, options: { color: "#8855FF" } },
            { center: appState.userLocation, options: { color: "#005bff" } },
            ...appState.markers,
        ],
        onStyleLoad: setMapListener,
    }
}

export function DistanceCard(props): Override {
    return {
        title: (appState.distance / 1000).toFixed(2) + "km",
    }
}

export function PredictionsContainer(): Override {
    const height = appState.predictions.length > 0 ? 300 : 0
    return {
        initial: { height },
        animate: { height },
        overflow: "hidden",
    }
}

export function PredictionsList(): Override {
    return {
        gap: 24,
        content: appState.predictions.map((prediction, index) => {
            return (
                <Text
                    key={index}
                    width="1fr"
                    height={200}
                    text={prediction.place_name}
                    textAlign="left"
                    resize="height"
                    paddingTop={4}
                    paddingBottom={4}
                    onTap={() => showPrediction(prediction)}
                />
            )
        }),
    }
}

export function setHereButton(): Override {
    return {
        disabled: appState.loading,
        onTap: forceUserLocation,
    }
}

export function userLocationButton(): Override {
    return {
        disabled: appState.loading,
        onTap: showUserLocation,
    }
}
