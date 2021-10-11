var express = require('express');
var router = express.Router();
const Teams = require('../models/Teams');

/* Post team */
router.route('/').post((req, res) => {
        const gamesPlatformsId = req.body.gamesPlatformsId;
        const teamName = req.body.teamName;
        const tag = req.body.tag;
        const description = req.body.description;
        const logo = req.body.logo;
        const streamUrl = req.body.streamUrl;
        console.log(req);

        const NewTeams = new Teams(
            {
                gamesPlatformsId,
                teamName,
                tag,
                description,
                logo,
                streamUrl,
            });
        NewTeams.save()
    }
);

/* Get team listing. */
router.route('/').get((req, res) => {
    Teams.find({})
        .then(teamList => {
            res.json(teamList)
        })
})

/*/!* Get team *!/
router.route('/').get((req, res) => {
    Teams.findOne(req.query._id)
        .then(team => {
            res.json(team)
        })
})*/

module.exports = router;
