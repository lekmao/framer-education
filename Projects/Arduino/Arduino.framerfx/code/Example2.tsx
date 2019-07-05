import { Override, Data } from "framer"
import { connectToSocket } from "./client"
// @ts-ignore
import { colors } from "@framer/steveruizok.education/code"

// State --------------------------------------------------

const appState = Data({
    connected: false,
    dialed: 0,
})

// Socket -------------------------------------------------

// [1]
const SERVER_URL = "http://localhost:3000"

// [2]
const CLIENT_ID = "FramerPrototype_Example2"

// [3]
const RESPONSES = {
    CONNECT: data => {
        if (data.id === CLIENT_ID) {
            console.log("Framer prototype (Example 2) connected.")
            appState.connected = true
        }
    },
    DISCONNECT: data => {
        if (data.id === CLIENT_ID) {
            console.log("Framer prototype (Example 2) disconnected.")
            appState.connected = false
        }
    },
    DIAL: data => {
        appState.dialed = data.value
    },
}

const dispatch = connectToSocket(SERVER_URL, CLIENT_ID, RESPONSES)

// Overrides ----------------------------------------------

export const ConnectedLabel: Override = () => {
    return {
        text: appState.connected ? "Connected" : "Disconnected",
        color: appState.connected ? colors.Secondary : colors.Border,
    }
}

export const DialIndicator: Override = () => {
    console.log(appState.dialed)
    return {
        value: appState.dialed * 100,
    }
}
