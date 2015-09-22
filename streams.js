var Stream = require("stream");
var stream = new Stream();

stream.readable = true;
stream.on("data", function(data) {
	console.log("data read : " +  data.toString());
});

stream.emit("data", new Buffer("foo"));
