var express = require('express');
var http = require('http');
var app = express();

app.get("/", function(req, res, next) {
	res.send("Hello <strong>homepage</strong>");
});

app.get("/foo", function(req, res, next) {
	res.send("Hello <strong>bat</strong>");
});

app.get("/*", function(req, res, next) {
	res.send("Hello <strong> default route</strong>");
});

http.createServer(app).listen(8000);

