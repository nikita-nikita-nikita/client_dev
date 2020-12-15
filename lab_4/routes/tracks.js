const express = require('express');
const {DB} = require('../database/database')

const router = express.Router();

router.get("/", async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    let tracks = await DB.getAllTracks();
    for (let i in tracks) {
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