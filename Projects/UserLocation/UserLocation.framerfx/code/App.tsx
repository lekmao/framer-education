import * as React from "react"
import { Data, Override } from "framer"
import { url } from "framer/resource"

// State --------------------------------------------

const state = Data({
    loading: false,
    longitude: 0,
    latitude: 0,
    zoom: 2,
})

// Event Handlers -----------------------------------
// So, now that I'm updating the project this way, does the file refresh?

const findUserLocation = () => {
    // [1]
    if (!navigator || navigator.userAgent.includes("FramerX")) {
        if (
            window.prompt(
                "Can't do this in Framer X. Open this project in browser?",
                url()
            )
        ) {
            window.open(url())
        }
        return
    }

    // [2]
    state.loading = true

    // [3]
    navigator.geolocation.getCurrentPosition(position => {
        Object.assign(state, {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            zoom: 17,
            loading: false,
        })
    })
}

// Overrides ---------------------------------------

export const SearchButton: Override = () => {
    return {
        disabled: state.loading,
        onTap: findUserLocation,
    }
}

export const Map: Override = () => {
    return {
        longitude: state.longitude,
        latitude: state.latitude,
        zoom: state.zoom,
    }
}

/*
Notes ____________________

[1]
If we can't get the location, prompt the user to open this
prototype in their regular browser.

[2]
While we wait for the data to come back, set loading to true.

[3]
Use the browser's navigator API to get the user's location,
and when it arrives, use this data to update our state

*/
