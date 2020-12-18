const express = require('express');
const {DB} = require('./database/database');
const routes = require('./routes/index.js');
const cors = require('cors');
require('./config/passportConfig');


const app = express();

app.use(cors());

const port = 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
routes(app);


//DB.addPurchase(1,2,3).then(console.log, console.log);
DB.getAllUsers().then(console.log, console.log);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.listen(port, () => {
    console.log(`server started at port ${port}`);
});
