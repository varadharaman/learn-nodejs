var express = require('express');
var app = express();
// comment the below line if you don't have ejs
app.set("view engine", "jade");

app.get('/', function(req, res) {
	res.render("default", {
		title: "Home",
		users: ["Alex", "Bill", "Craig"]		
	});
});

app.listen(8000, function() {
	console.log("Listening to port 8000");
});
