let express = require('express')
let request = require('request')
let querystring = require('querystring')
var fs = require('fs')

let contents = fs.readFileSync('config.json')
// @ts-ignore
let config = JSON.parse(contents)

console.log(config)

let app = express()

let redirect_uri = config.projectURI

app.get('/login', function(req, res) {
	res.redirect(
		'https://accounts.spotify.com/authorize?' +
			querystring.stringify({
				response_type: 'code',
				client_id: process.env.SPOTIFY_CLIENT_ID,
				scope: 'user-read-private user-read-email',
				redirect_uri,
			})
	)
})

app.get('/callback', function(req, res) {
	let code = req.query.code || null
	let authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		form: {
			code: code,
			redirect_uri,
			grant_type: 'authorization_code',
		},
		headers: {
			Authorization:
				'Basic ' +
				new Buffer(
					process.env.SPOTIFY_CLIENT_ID +
						':' +
						process.env.SPOTIFY_CLIENT_SECRET
				).toString('base64'),
		},
		json: true,
	}
	request.post(authOptions, function(error, response, body) {
		var access_token = body.access_token
		let uri = config.projectURI
		res.redirect(uri + '?access_token=' + access_token)
	})
})

let port = process.env.PORT || 2345
console.log(
	`Listening on port ${port}. Go /login to initiate authentication flow.`
)

app.listen(port)
