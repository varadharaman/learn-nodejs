var express=require('express');
var http=require('http');
var app=express();

app.set('views','./views');
app.set('view engine','jade');

app.get('/', function(req, res) {
	res.render('jadedemo', {pageTitle:'Learning Jade', youAreUsingJade: true});
});

http.createServer(app).listen(8000, function() {
	console.log('App started');
});
