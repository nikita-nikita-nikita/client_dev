const express = require('express');
const {DB} = require('./database/database')

const app = express();
const port = 5000;

const routes = require('./routes/index.js');
routes(app);

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));


//DB.addPurchase(1,2,3).then(console.log, console.log);
DB.getUserByUsername('vasya').then(console.log, console.log);

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

	next();
 });

app.listen( port, () => {
    console.log( `server started at port ${ port }`);
});