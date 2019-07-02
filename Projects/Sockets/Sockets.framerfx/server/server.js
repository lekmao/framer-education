var http = require('http')
var app = require('express')()
var server = http.createServer(app)
var io = require('socket.io')(server)

// 1. Socket Map
// We'll keep track of connected sockets as "subscribers" and
// "notify" each subscriber whenever new data arrives.

const subscribers = new Map()

const subscribe = (id, socket) => {
	if (subscribers.has(id)) {
		unsubscribe(id)
	}

	subscribers.set(id, socket)
	console.log(`Connected to ${id}.`)
}

const unsubscribe = (id) => {
	subscribers.delete(id)
	console.log(`Disconnected from ${id}.`)
}

const notifySubscribers = (data) => {
	subscribers.forEach((socket) => socket.emit('action', data))
}

// 2. Server
// When the server receives new socket connections, subscribe
// the new socket and set event listeners.

io.on('connection', (socket) => {
	const { id = 'DefaultSocket' } = socket.handshake.query

	subscribe(id, socket)

	socket.on('action', (data) => {
		notifySubscribers(data)
	})

	socket.on('disconnect', () => {
		unsubscribe(id)
	})
})

// 3. Start the server
server.listen(3000, () => console.log('Listening at http://localhost:3000'))
