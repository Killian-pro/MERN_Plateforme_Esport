var mongoose = require ('mongoose')

const PlatformsSchema =
{
  name: String,
}

const Platforms = mongoose.model("Platforms",PlatformsSchema)

module.exports = Platforms;
