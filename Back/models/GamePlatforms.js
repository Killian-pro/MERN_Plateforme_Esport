var mongoose = require ('mongoose')

const GamesPlatformsSchema =
{
  gameId: String,
  platformId: String,
}

const GamesPlatforms = mongoose.model("GamesPlatforms",GamesPlatformsSchema)

module.exports = GamesPlatforms;
