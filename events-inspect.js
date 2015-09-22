var events = require("events");
var emitter = new events.EventEmitter();
emitter.on("foo", function() {});
emitter.on("foo", function() {});

//var EventEmitter = events.EventEmitter;
console.log(events.EventEmitter.listenerCount(emitter, "foo"));
