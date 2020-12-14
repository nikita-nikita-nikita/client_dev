const express = require('express');
const {DB} = require('../database/database')

const router = express.Router();

router.get("/", async (req, res, next) => {
	
	let tracks = await DB.getAllTracks();
	for(let i in tracks){
		let tags = await DB.getTrackTags(tracks[i].id);
		const arr = [];
		tags.forEach((tag) => {
			arr.push(tag.name);
		});
		tracks[i].tags = arr;
	}
	res.send(tracks);
});

module.exports = router;