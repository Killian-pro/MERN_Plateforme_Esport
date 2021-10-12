var express = require('express');
var router = express.Router();
const Teams = require('../models/Teams');

/* Post team */
router.route('/').post((req, res) => {
        const gameId = req.body.gameId;
        const teamName = req.body.teamName;
        const tag = req.body.tag;
        const description = req.body.description;
        const logo = req.body.logo;
        const streamUrl = req.body.streamUrl;
        const experience = req.body.experience;
        const ambition = req.body.ambition;
        const rank = req.body.rank;
        const idcreator  = req.body.idcreator;

        const NewTeams = new Teams(
            {
                gameId,
                teamName,
                tag,
                description,
                logo,
                streamUrl,
                experience,
                ambition,
                rank,
                idcreator
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

/* Get team by user id. */
router.route('/id').get((req, res) => {
    Teams.findOne({idcreator: req.query._id})
      .then(foundPlayer => {
        res.json(foundPlayer)
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
