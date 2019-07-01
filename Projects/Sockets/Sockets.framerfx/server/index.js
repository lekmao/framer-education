var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

/*
In this example, each client would subscribe with a unique
id, stored using the query option.

For example, in our client...

```
const socket = io("http://localhost:3000", {
    query: `id=clientA`,
})
```
*/

// Store a list of subscribers (connected sockets) that
// We'll update each time any of the sockets emits an action

const subscribers = {}
const sockets = new Set()

const subscribe = (id, socket) => {
	if (subscribers[id]) {
		unsubscribe(id)
	}

	subscribers[id] = socket
	sockets.add(socket)
}

const unsubscribe = (id) => {
	subscribers[id].disconnect()
	sockets.delete(subscribers[id])
}

const updateSubscribers = (data) => {
	sockets.forEach((socket) => socket.emit('action', data))
}

// When the server receives new connections, subscribe the new
// connection and set event listeners to unsubscribe and respond
// to actions.

io.on('connection', (socket) => {
	const { id } = socket.handshake.query

	subscribe(id, socket)

	socket.on('action', (data) => {
		updateSubscribers(data)
	})

	socket.on('disconnect', () => {
		unsubscribe(id)
	})
})

// When the server receives a disconnection, double check that we've
// removed the client from the set of subscribers

io.on('disconnection', (socket) => {
	const { id } = socket.handshake.query

	if (subscribers[id]) {
		unsubscribe(id)
	}
})

// Start the server at http://localhost:3000

http.listen(3000, function() {
	console.log('Listening at http://localhost:3000')
})
