const tracks = require('./tracks');

module.exports = (app) => {
	app.use("/", tracks);
}