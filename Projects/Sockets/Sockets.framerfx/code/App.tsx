import { Override, Data } from "framer"
import * as io from "socket.io-client"
// @ts-ignore
import { colors } from "@framer/steveruizok.education/code"

// State

const appState = Data({
    connected: false,
    nightMode: false,
})

// Socket

const SOCKET_URL = "http://localhost:3000"
const CLIENT_ID = "FramerPrototype"

const socket = io(SOCKET_URL, {
    reconnection: false,
    query: `id=${CLIENT_ID}`,
})

socket.on("connect", () => {
    appState.connected = true
})

socket.on("action", data => {
    switch (data.type) {
        case "FLIPSWITCH":
            appState.nightMode = data.value
            break
        default:
            return
    }
})

socket.on("disconnect", function() {
    appState.connected = false
})

// Overrides

export const Switch: Override = () => {
    return {
        value: appState.nightMode,
        onValueChange: value => {
            socket.emit("action", {
                type: "FLIPSWITCH",
                value,
            })
        },
    }
}

export const ConnectedLabel: Override = () => {
    return {
        text: appState.connected ? "Connected" : "Disconnected",
        color: appState.connected ? colors.Secondary : colors.Border,
    }
}

export const Background: Override = () => {
    return {
        background: appState.nightMode ? "#2d2d2d" : "#fdfdfd",
    }
}
