var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

const subscribers = {}
const sockets = new Set()

io.on('connection', (socket) => {
	const { id } = socket.handshake.query

	if (subscribers[id]) {
		subscribers[id].disconnect()
		sockets.delete(subscribers[id])
		console.log('Disconnected existing socket with id ' + id)
	}

	subscribers[id] = socket
	sockets.add(socket)

	console.log('Registered a new socket with id ' + id)

	socket.emit('connected', { id })

	socket.on('action', (payload) => {
		console.log('Receieved action! with payload ' + JSON.stringify(payload))
		sockets.forEach((socket) => socket.emit('action', payload))
	})
})

io.on('disconnection', (socket) => {
	const { id } = socket.handshake.query

	if (subscribers[id]) {
		sockets.delete(subscribers[id])
		subscribers[id] = null
		console.log('Removed a disconnected subscriber')
	}
})

http.listen(3001, function() {
	console.log('listening on *:3001')
})
