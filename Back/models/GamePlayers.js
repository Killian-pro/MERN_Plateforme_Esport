var mongoose = require ('mongoose')

const GamesPlayersSchema =
{
  playerId: String,
  teamId: String,
  gamePlatformsId: String,
  username: String,
  rank: String,
  isOwner: Boolean,
}

const GamesPlayers = mongoose.model("GamesPlayers",GamesPlayersSchema)

module.exports = GamesPlayers;
