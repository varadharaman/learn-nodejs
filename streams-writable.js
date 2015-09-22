var Stream = require("stream");
var stream = new Stream();

var success = process.stdout.write("foo\n", function() {
	console.log("Data was successfully written!");
});

console.log("success = " + success);
