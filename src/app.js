const Nodest = require("nodest");

// App class
class App extends Nodest.Application {

	// init() gets called to initialize app
	// setup app routes, middleware, etc
	init() {
		this.use("./common.middleware.js");
		this.route("/", "./index.controller.js");
	}
}

module.exports = App;