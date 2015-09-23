var express = require('express');
var http = require('http');
var app = express();

var routes = require('./routes'); // or ./routes/index 
var users = require('./routes/users');

app.get('/', routes.index);
app.get('/users', users.list);

app.listen(8000);
