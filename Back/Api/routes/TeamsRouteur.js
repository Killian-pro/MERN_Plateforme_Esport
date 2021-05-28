var express = require('express');
var router = express.Router();
const Teams = require('../models/Teams');


/* GET users listing. */
router.route('/').post((req,res)=>
{
  const gamesPlatformsId =req.body.gamesPlatformsId;
  const teamName = req.body.teamName;
  const tag = req.body.tag;
  const description = req.body.description;
  const logo = req.body.logo;
  const streamUrl = req.body.streamUrl;
  
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

module.exports = router;
