import { Override, Data } from "framer"
import * as io from "socket.io-client"
// @ts-ignore
import { colors } from "@framer/steveruizok.education/code"

// State --------------------------------------------------

const appState = Data({
    connected: false,
    nightMode: false,
})

// Socket -------------------------------------------------

// [1]
const SERVER_URL = "http://localhost:3000"

// [2]
const CLIENT_ID = "FramerPrototype"

// [3]
const responses = {
    FLIP_SWITCH: data => (appState.nightMode = data.value),
}

// [4]
const sendAction = (type: string, data: { [key: string]: any } = {}) =>
    socket.emit("action", { type, ...data })

const socket = io(SERVER_URL, {
    reconnection: false,
    query: `id=${CLIENT_ID}`,
})

socket.on("connect", () => (appState.connected = true))

socket.on("action", data => responses[data.type] && responses[data.type]())

socket.on("disconnect", () => (appState.connected = false))

// Overrides ----------------------------------------------

export const Switch: Override = () => {
    return {
        value: appState.nightMode,
        onValueChange: value => {
            // [5]
            sendAction("FLIP_SWITCH", { value: value })
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
respond to a FLIP_SWITCH action by updating appState.nightMode.
If we expected to receive a RESET_SWITCH action from some
connected prototype, we could add a response like this:

const responses = {
    FLIP_SWITCH: data => (appState.nightMode = data.value),
    RESET_SWITCH: () => appState.nightMode = false
}

[4]
In this prototype, we can interact with the socket through
"actions". See [5] for an example of creating an action.

[5]
We call sendAction with the action's type (ie FLIPSWITCH).
We can also include an object with whatever data we want. 
In our case, we're sending along either { value: true }
or { value: false }, depending on whether we're flipped 
the switch on or off.
*/
