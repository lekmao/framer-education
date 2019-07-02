var http = require('http')
var app = require('express')()
var server = http.createServer(app)
var io = require('socket.io')(server)

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
	console.log(`Connected to ${id}.`)
}

const unsubscribe = (id) => {
	subscribers[id].disconnect()
	sockets.delete(subscribers[id])
	console.log(`Disconnected from ${id}.`)
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

server.listen(3000, () => console.log('Listening at http://localhost:3000'))
