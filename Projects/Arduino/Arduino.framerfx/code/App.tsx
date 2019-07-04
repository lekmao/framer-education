import { Override, Data } from "framer"
import * as io from "socket.io-client"
// @ts-ignore
import { colors } from "@framer/steveruizok.education/code"

// State --------------------------------------------------

const appState = Data({
    connected: false,
    pushed: false,
})

// Socket -------------------------------------------------

// [1]
const SERVER_URL = "http://localhost:3000"

// [2]
const CLIENT_ID = "FramerPrototype_A"

// [3]
const responses = {
    BUTTON_DOWN: data => {
        appState.pushed = true
    },
    BUTTON_UP: data => {
        appState.pushed = false
    },
}

// [4]
const sendAction = (type: string, data: { [key: string]: any } = {}) =>
    socket.emit("action", { type, ...data })

const socket = io(SERVER_URL, {
    reconnection: false,
    query: `id=${CLIENT_ID}`,
})

socket.on("connect", () => (appState.connected = true))

socket.on(
    "action",
    ({ type, ...data }) => responses[type] && responses[type](data)
)

socket.on("disconnect", () => (appState.connected = false))

// Overrides ----------------------------------------------

export const Indicator: Override = () => {
    return {
        background: appState.pushed ? colors.Accent : colors.Shadow,
    }
}

export const ConnectedLabel: Override = () => {
    return {
        text: appState.connected ? "Connected" : "Disconnected",
        color: appState.connected ? colors.Secondary : colors.Border,
    }
}

/* Notes __________________________________________________

[1]
The SERVER_URL variable points to the URL of the node
server hosting the socket connection. If you've started
the server on your own machine, then you are the "host"
and may use "localhost:3000" for this variable.

If testing this prototype with multiple machines, only one 
machine needs to start the server. The other machines
will need to use the host's local IP address (available
from System Preferences > Network), together with the
server's port (3000) in order to connect to the server.

All machines will need to be on the same local network 
(most likely a WIFI network). Each should have a
unique CLIENT_ID to avoid conflicts. (See [2]).

The result should look something like:

    const SERVER_URL = "192.168.0.42:3000"
    const CLIENT_ID = "FrankieKazarian"

In this prototype, flipping the switch from a second machine
would also flip the switch on all connected machines.

- You'll need to update CLIENT_ID to a unique value for each
  connected machine (see [2] below).

[2]
When connecting to a server, each machine will need to use
a unique ID. This can be any string, but it must be different
than the IDs used by other connected machines or else those
other connections will be closed.

[3]
Whenever any connected client sends an actions, that action
will be broadcast to all clients. Here we define how this
prototype should respond to actions. In our case, we
respond to the BUTTON_DOWN and BUTTON_UP actions by updating appState.pushed. These events are dispatched from the
Arduino (see server/index.js)

[4]
In this prototype, we can interact with the socket through
"actions".
*/
