const tracks = require('./tracks');
const prices = require('./prices');

module.exports = (app) => {
	app.use("/tracks", tracks);
	app.use("/prices", prices);
	//app.use("/auth");
}
