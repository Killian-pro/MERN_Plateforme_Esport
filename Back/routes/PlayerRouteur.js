var express = require('express');
var router = express.Router();
const Player = require('../models/Player');


/* GET users listing. */
router.route('/').post((req,res)=>
{
  const firstName =req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const mail = req.body.mail;
  const pseudo = req.body.pseudo;
  const avatar = req.body.avatar;
  const streamUrl = req.body.streamUrl;
  const ambition = req.body.ambition;
  const experience = req.body.experience;
  const rank = req.body.rank;
  const description = req.body.description;

  const NewPlayer = new Player(
    {
      firstName,
      lastName,
      password,
      mail,
      pseudo,
      avatar,
      streamUrl,
      experience,
      ambition,
      rank,
      description,

    });
    NewPlayer.save()
}
);

router.route('/').get((req, res) => {
  Player.findOne({mail: req.query.Email , password: req.query.Password })
    .then(foundPlayer => {
      res.json(foundPlayer)
    })
})

module.exports = router;
