var express = require('express')
var http    = require('http')
var app     = express()
var server  = http.Server(app)

app.use(express.static('./'))

app.listen('2020', () =>
	console.log('Server listening on 2020')
)