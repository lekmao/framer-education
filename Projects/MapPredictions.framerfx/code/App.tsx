import * as React from "react"
import { Override, Data } from "framer"
// @ts-ignore
import { Text } from "@framer/steveruizok.education/code"

const appState = Data({
    predictionsOpen: false,
    query: "",
    location: [4.887827, 52.369793],
    predictions: [],
})

// Callbacks

const getPredictions = async (query: string) => {
    const url = [
        `https://cors-anywhere.herokuapp.com/`,
        `https://api.mapbox.com/`,
        `geocoding/v5/`,
        `mapbox.places/${query}.json`,
        `?access_token=${ACCESS_TOKEN}`,
    ].join("")

    const results = await fetch(url)
    const json = await results.json()
    return json.features
}

const handleFocus = () => {
    appState.predictionsOpen = true
    handleQuery(appState.query)
}

const handleQuery = async query => {
    if (appState.predictionsOpen && query.length > 3) {
        appState.query = query
        appState.predictions = await getPredictions(query)
    }
}

const showPrediction = prediction => {
    const { center } = prediction
    appState.location = center
    clearPredictions()
}

const clearPredictions = () => {
    appState.predictionsOpen = false
    appState.predictions = []
}

// Overrides

export function TextInput(): Override {
    return {
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
        markers: [{ center: appState.location }],
    }
}

export function PredictionsContainer(): Override {
    const height = appState.predictions.length > 0 ? 500 : 0
    return {
        initial: { height },
        animate: { height },
        overflow: "hidden",
    }
}

export function PredictionsList(): Override {
    return {
        height: appState.predictions.length > 0 ? 420 : 0,
        overflow: "hidden",
        content: appState.predictions.map((prediction, index) => {
            return (
                <Text
                    key={index}
                    width="1fr"
                    text={prediction.place_name}
                    textAlign="left"
                    resize="height"
                    onTap={() => showPrediction(prediction)}
                />
            )
        }),
    }
}

const ACCESS_TOKEN = [
    "YzDTVL3576Zed2ii0ow",
    "AxdDJvbDQwamdydXdqZiJ9.kb2",
    "2siLCJhIjoiY2l2cnFnMmt4MD",
    "pk.eyJ1Ijoic3RldmVydWl6b",
]
    .reverse()
    .join("")
