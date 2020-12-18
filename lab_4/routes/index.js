const tracks = require('./tracks');
const prices = require('./prices');
const users = require('./userRoutes')

module.exports = (app) => {
	app.use("/tracks", tracks);
	app.use("/prices", prices);
	app.use("/users", users);
}
