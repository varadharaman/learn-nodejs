var fs = require("fs");
//var path="/";
var path = "hello-world.js";
var existsSync = fs.existsSync(path);
fs.exists(path, function(exists) {
	if (exists !== existsSync) {
		console.error("Something is wrong!");		
	} else {
		console.log(path + " exists : " + exists);
	}
});

// Retrieving File Statistics
fs.stat(path, function(error, stats) {
	if (error) {
		console.error("stat error: " + error.message);
	} else {
		console.log(stats);
	}
});
