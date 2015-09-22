var events = require("events");
var emitter = new events.EventEmitter();
var username = "varadha";
var password = "password";

emitter.on("userAdded", function(username, password) {
	console.log("Added user " + username);
});

emitter.emit("userAdded", username, password);

emitter.once("foo", function() {
	console.log("I'm in foo handler");
});

emitter.emit("foo");
emitter.emit("foo");

