import * as React from "react"
import { Data, Override } from "framer"
// @ts-ignore
import { pull } from "@framer/steveruizok.education/code"

// [1]
import { markers } from "./Markers"

// State --------------------------------------------

const state = Data({
    markers: [] as any,
})

// Event Handlers -----------------------------------

const loadMarkers = () => {
    state.markers = markers
}

const removeMarker = (marker, event, map) => {
    const markerToRemove = markers.find(m => m.id === marker.id)
    state.markers = pull(state.markers, markerToRemove)
}

// Overrides ---------------------------------------

export const LoadMarkersButton: Override = () => {
    return {
        onTap: loadMarkers,
    }
}

export const Map: Override = () => {
    return {
        markers: state.markers, // [2]
        onMarkerClick: removeMarker, // [3]
    }
}

/*
Notes ____________________

[1]
Bring in a list of markers from Markers.tsx. (We could also define
them here, but for the sake of readable code I've moved them into
a separate file).

[2]
Pass the current markers array into the map's markers prop.

[3]
When we tap on a marker, remove it from the markers array. If fit 
to bounds is true, the map will reposition based on its new set of
markers.

*/
