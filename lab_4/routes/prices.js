const express = require('express');
const {DB} = require('../database/database')

const router = express.Router();

router.get("/", async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    let prices = await DB.getAllPrices();
    res.send(prices);
});

module.exports = router;