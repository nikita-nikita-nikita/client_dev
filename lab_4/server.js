const express = require('express');

const app = express();
const port = env.app.port||8080;


app.listen( port, () => {
    console.log( `server started at port ${ port }`);
});
