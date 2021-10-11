var mongoose = require ('mongoose')

const TeamsSchema =
{
  gameId: String,
  teamName: String,
  tag: String,
  description: String,
  logo: String,
  streamUrl: String,
}

const Teams = mongoose.model("Teams",TeamsSchema)

module.exports = Teams;
