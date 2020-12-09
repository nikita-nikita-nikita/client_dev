const express = require('express');
const {DB} = require('./database/database')

const app = express();
const port = 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


DB.request(`SELECT * FROM users`);


app.listen( port, () => {
    console.log( `server started at port ${ port }`);
});
