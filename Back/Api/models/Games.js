var mongoose = require ('mongoose')

const GamesSchema =
{
  name: String,
}

const Games = mongoose.model("Games",GamesSchema)

module.exports = Games;
