import { Override, Data } from "framer"
import * as io from "socket.io-client"

// Socket

const SOCKET_URL = "http://localhost:3000"
const CLIENT_ID = "FramerPrototype"

const socket = io(SOCKET_URL, {
    reconnection: false,
    query: `id=${CLIENT_ID}`,
})

socket.on("connect", () => {
    console.log("Connected")
})

socket.on("action", data => {
    switch (data.type) {
        case "FLIPSWITCH":
            appState.nightMode = data.value
        default:
            return
    }
})

socket.on("disconnect", function() {
    console.log("Disconnected")
})

// Overrides

const appState = Data({
    nightMode: false,
})

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

export const Background: Override = () => {
    return {
        background: appState.nightMode ? "#2d2d2d" : "#fdfdfd",
    }
}
