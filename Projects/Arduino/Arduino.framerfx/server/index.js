const five = require('johnny-five')
const board = new five.Board()

const { startServer } = require('./server')
const { connectToServer } = require('./client')

// [1]
startServer(3000)

board.on('ready', function() {
	/* --------------------------------- Socket --------------------------------- */

	// [2]
	const SERVER_URL = 'http://localhost:3000'

	// [3]
	const CLIENT_ID = 'Arduino_A'

	// [4]
	const RESPONSES = {
		CONNECT: (data) => {
			if (data.id === CLIENT_ID) {
				console.log('Arduino connected.')
			}
		},
		DISCONNECT: (data) => {
			if (data.id === CLIENT_ID) {
				console.log('Arduino disonnected.')
			}
		},
		TOGGLE_LED: (data) => {
			if (data.value) {
				led.on()
			} else {
				led.off()
			}
		},
	}

	// [5]
	const dispatch = connectToServer(SERVER_URL, CLIENT_ID, RESPONSES)

	/* --------------------------------- Arduino -------------------------------- */

	const led = new five.Led(13)
	const button = new five.Button(2)

	board.repl.inject({
		button: button,
		led: led,
	})

	// Board Events

	// [6]
	button.on('down', () => {
		dispatch('BUTTON_DOWN')
	})

	button.on('hold', () => {
		dispatch('BUTTON_HOLD')
	})

	button.on('up', () => {
		dispatch('BUTTON_UP')
	})
})

/*
Notes ______________

[1]
Here's where we start the server, passing it the port where we
want the server to run. In this demo, we're using port 3000.
You can use any port, just so long as there isn't a different
process using that port already. If our socket were running
somewhere else, we could skip this part of the code.

[2]
The server url is the URL where the socket.io server is running.
In this demo, the server will run "locally" at the port we gave
it, port 3000. If our server were running somewhere else, we 
would need to find the server's URL and put it here.

[3]
We'll need to use unique IDs for each "client" that we connect to
the server. This ID can be anything – but it needs to be different
than any other client that we want to connect, or else that other
client will get disconnected.

[4]
In this demo, we've set up a server that will broadcast different
"actions" to connected sockets. Here we're defining which actions
we want to respond to, using callbacks to fire when that action
occurs.

[5]
Here's where we connect to the server, passing in our server url,
client id, and the responses we want for different actions. The
`connectToServer` function returns a new function, `dispatch`, that
we can use to send actions to the server.

[6]
We create new events using the `dispatch` function, too. Actions 
have two parts: a name (like "BUTTON_DOWN") and, optionally, an
object containing some data. When we dispatch an action, the server 
broadcasts the it to each connected socket, which can respond to 
the action using responses (see [4]). 

In this case, any client with a response for "BUTTON_DOWN" would
would trigger that response and run its callback function.
*/
