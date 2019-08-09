import { ACCESS_TOKEN } from "./access"

export const getPredictions = async (query: string) => {
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

// Add a line between two points
export const addLine = state => {
    const { map, location, userLocation } = state
    map.addLayer({
        id: "location-line",
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates: [userLocation, location],
                },
            },
        },
        layout: {
            "line-join": "round",
            "line-cap": "round",
        },
        paint: {
            "line-color": "#555555",
            "line-width": 4,
            "line-dasharray": [0, 2],
        },
    })
}

// Update the line

export const updateRoute = async state => {
    const { map, location, userLocation } = state

    state.route = null

    // Get walking directions from Mapbox
    const response = await fetch(
        [
            `https://api.mapbox.com/`,
            `directions/v5/mapbox/walking/`,
            `${location};${userLocation}`,
            `?overview=full&geometries=geojson`,
            `&access_token=${ACCESS_TOKEN}`,
        ].join("")
    )

    const { routes } = await response.json()

    // Get a route from the response
    const [route] = routes

    // If we have a route...
    if (route) {
        // Show the route
        state.route = route
        state.distance = route.distance
        map.getSource("location-line").setData({
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    geometry: route.geometry,
                },
            ],
        })
    } else {
        // Show a straight line instead
        const [lon1, lat1] = location
        const [lon2, lat2] = userLocation
        state.distance = distanceInKilometers([lat1, lon1], [lat2, lon2])
        map.getSource("location-line").setData({
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    geometry: {
                        type: "LineString",
                        coordinates: [userLocation, state.location],
                    },
                },
            ],
        })
    }
}

// Calculate distance in kilometers
export function distanceInKilometers(a, b) {
    const [lat1, lon1] = a
    const [lat2, lon2] = b
    if (lat1 == lat2 && lon1 == lon2) {
        return 0
    } else {
        var radlat1 = (Math.PI * lat1) / 180
        var radlat2 = (Math.PI * lat2) / 180
        var theta = lon1 - lon2
        var radtheta = (Math.PI * theta) / 180
        var dist =
            Math.sin(radlat1) * Math.sin(radlat2) +
            Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
        if (dist > 1) {
            dist = 1
        }
        return ((Math.acos(dist) * 180) / Math.PI) * 14.62893696
    }
}
