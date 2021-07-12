var mongoose = require ('mongoose')

const PlayerSchema =
{
  firstName: String,
  lastName: String,
  password: String,
  mail: String,
  pseudo: String,
  avatar: String,
  streamUrl: String
}

const Player = mongoose.model("Player",PlayerSchema)

module.exports = Player;
