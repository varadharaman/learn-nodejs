var http = require('http');
var express = require('express');
var app = express();

var routes = require('./routes-1')(app);

http.createServer(app).listen(8000, function() {
	console.log('App started');	
});
