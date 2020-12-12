const express = require('express');
const {DB} = require('../database/database')

const router = express.Router();

router.get("/tracks", async (req, res, next) => {
	let tracks = await DB.getAllTracks();
	res.send(tracks);
});

module.exports = router;