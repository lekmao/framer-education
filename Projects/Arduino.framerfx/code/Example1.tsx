import { Override, Data } from "framer"
import { connectToSocket } from "./client"
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
const CLIENT_ID = "FramerPrototype_Example1"

// [3]
const RESPONSES = {
    CONNECT: data => {
        if (data.id === CLIENT_ID) {
            console.log("Framer prototype (Example 1)  connected.")
            appState.connected = true
        }
    },
    DISCONNECT: data => {
        if (data.id === CLIENT_ID) {
            console.log("Framer prototype (Example 1)  disconnected.")
            appState.connected = false
        }
    },
    BUTTON_DOWN: () => (appState.pushed = true),
    BUTTON_UP: () => (appState.pushed = false),
}

// [4]
const dispatch = connectToSocket(SERVER_URL, CLIENT_ID, RESPONSES)

// Overrides ----------------------------------------------

export const ConnectedLabel: Override = () => {
    return {
        // [5]
        text: appState.connected ? "Connected" : "Disconnected",
        color: appState.connected ? colors.Secondary : colors.Border,
    }
}

export const Indicator: Override = () => {
    return {
        // [6]
        background: appState.pushed ? colors.Accent : colors.Shadow,
    }
}

export const LEDIndicator: Override = () => {
    return {
        onValueChange: value => {
            // [7]
            dispatch("TOGGLE_LED", { value })
        },
    }
}

/* Notes __________________________________________________

[1]
The server url is the URL where the socket.io server is running.
If you've started the server on your own machine, then you are 
the "host" and should use "localhost:3000" for this variable.

If testing this prototype with multiple machines, only one 
machine needs to start the server. The other machines
will need to use the host's local IP address (available
from System Preferences > Network), together with the
server's port (3000) in order to connect to the server.

All machines will need to be on the same local network 
(most likely a WIFI network). Each should have a unique 
CLIENT_ID to avoid conflicts. (See [2]).

The result should look something like:

    const SERVER_URL = "192.168.0.42:3000"
    const CLIENT_ID = "FrankieKazarian"

In this prototype, flipping the switch from a second machine
would also flip the switch on all connected machines.

- You'll need to update CLIENT_ID to a unique value for each
  connected machine (see [2] below).

[2]
We'll need to use a unique ID for each "client" that we connect to
the server. This ID can be anything – but it needs to be different
than any other client that we want to connect, or else that other
client will get disconnected.

[3]
In this demo, we're using a server that will broadcast different
"actions" to connected sockets. Here we're defining which actions
we want to respond to, using callbacks to fire when that action
occurs.

[4]
Here's where we connect to the server, passing in our server url,
client id, and the responses we want for different actions. The
`connectToServer` function returns a new function, `dispatch`, that
we can use to send actions to the server.

[5]
When our socket connects, it will update the state, making
all of our overrides update again. This override will 
"present" parts of the new state to our user through text
and color, so we can see when the prototype is connected.

[6]
When we push the button on our Arduino, we'll also update 
our state. This override will present that new state by 
setting the color of the attached Frame.

[7]
We create new events using the `dispatch` function, too. Actions 
have two parts: a name (like "BUTTON_DOWN") and, optionally, an
object containing some data. When we dispatch an action, the server 
broadcasts the it to each connected socket, which can respond to 
the action using responses (see [4]). 

In this case, any client with a response for "TOGGLE_LED" would
would trigger that response and run its callback function. That
callback would receive the data we're sending it here.
*/
