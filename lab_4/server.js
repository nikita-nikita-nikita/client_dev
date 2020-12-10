const express = require('express');
const {DB} = require('./database/database')

const app = express();
const port = 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//DB.addPurchase(1,2,3).then(console.log, console.log);
DB.getAllTracks().then(console.log);


app.listen( port, () => {
    console.log( `server started at port ${ port }`);
});
