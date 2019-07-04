require('./server')
var io = require('socket.io-client')
var five = require('johnny-five')
let board, button, SERVER_URL, CLIENT_ID

SERVER_URL = 'http://localhost:3000'
CLIENT_ID = 'Arduino_A'

board = new five.Board()

board.on('ready', function() {
	/* --------------------------------- Socket --------------------------------- */

	const responses = {
		BLINK_LED: (data) => {},
	}

	const sendAction = (type = 'ACTION', data = {}) =>
		socket.emit('action', { type, ...data })

	const socket = io(SERVER_URL, {
		query: `id=${CLIENT_ID}`,
	})

	socket.on('connect', () => console.log('Arduino connected.'))

	socket.on(
		'action',
		({ type, ...data }) => responses[type] && responses[type](data)
	)

	socket.on('disconnect', () => console.log('Arduino disconnected.'))

	/* --------------------------------- Arduino -------------------------------- */

	button = new five.Button(2)

	board.repl.inject({
		button: button,
	})

	// Button Event API

	button.on('down', () => {
		sendAction('BUTTON_DOWN')
	})

	button.on('hold', () => {
		sendAction('BUTTON_HOLD')
	})

	button.on('up', () => {
		sendAction('BUTTON_UP')
	})
})
