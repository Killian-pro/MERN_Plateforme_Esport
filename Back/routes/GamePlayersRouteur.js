var express = require('express');
var router = express.Router();
const GamesPlayers = require('../models/GamePlayers');


router.route('/').post((req,res)=>
{
  const playerId =req.body.playerId;
  const teamId =req.body.teamId;
  const gamePlatformsId =req.body.gamePlatformsId;
  const username =req.body.username;
  const rank =req.body.rank;
  const isOwner =req.body.isOwner;

  const NewGamesPlayers = new GamesPlayers(
    {
          playerId,
          teamId,
          gamePlatformsId,
          username,
          rank,
          isOwner,
    });
    NewGamesPlayers.save()
}
);


module.exports = router;
