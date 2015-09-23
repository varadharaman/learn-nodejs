var express=require('express');
var http=require('http');
var app=express();

app.set('views','./views');
app.set('view engine','jade');

app.use(require('stylus').middleware('./public'));
app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.render('stylusdemo', {title:'Home page'});
});

http.createServer(app).listen(8000, function() {
	console.log('App started');
});
