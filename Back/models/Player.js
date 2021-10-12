var mongoose = require ('mongoose')

const PlayerSchema =
{
  firstName: String,
  lastName: String,
  password: String,
  mail: String,
  pseudo: String,
  avatar: String,
  streamUrl: String,
  ambition : String,
  experience : String,
  rank : String,
  description : String
}

const Player = mongoose.model("Player",PlayerSchema)

module.exports = Player;
