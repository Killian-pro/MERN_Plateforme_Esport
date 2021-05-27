var express = require('express');
var router = express.Router();
const GamesPlatforms = require('../models/GamePlatforms');


/* GET users listing. */
router.route('/').post((req,res)=>
{
  const gameId =req.body.gameId;
  const platformId =req.body.platformId;

  const NewGamesPlatforms = new GamesPlatforms(
    {
        gameId,
        platformId,
    });
    NewGamesPlatforms.save()
}
);

module.exports = router;
