var express = require("express");
var router = express.Router();
const axios = require('axios');

router.get("/", function (req, res, next) {
    const config = {
        method: 'get',
        url: `https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${req.query.pseudo}`,
        headers: {"TRN-Api-Key": "67b9504c-423a-4d75-a95d-2b6225d3029a",
        "Accept": "application/json",
        "Accept-Encoding": "gzip"}
    }
    axios(config)
        .then(resp => {
            res.send(resp.data);
        });
});



module.exports = router;
