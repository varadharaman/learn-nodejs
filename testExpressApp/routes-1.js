var routes = require('./handlers/index');
var user = require('./handlers/users');
module.exports = function(app) {
	// define the routes
	app.get('/', routes.index);
	app.get('/users',user.list);	
};