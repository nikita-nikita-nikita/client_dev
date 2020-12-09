const express = require('express');

const app = express();
const port = env.app.port||8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen( port, () => {
    console.log( `server started at port ${ port }`);
});
