const tracks = require('./tracks');

module.exports = (app) => {
	app.use("/tracks", tracks);
	app.use("/auth");
}
