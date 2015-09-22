var events = require("events");
var emitter = new events.EventEmitter();
emitter.on("foo", function() {
	console.log("In foo handler");
});

emitter.on("foo", function() {
	console.log("In foo handler-1");
});

emitter.on("foo", function() {
	console.log("In foo handler-2");
});

emitter.listeners('foo').forEach(function(handler) {
	handler();
});