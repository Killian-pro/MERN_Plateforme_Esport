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

  const NewPlayer = new Player(
    {
      firstName,
      lastName,
      password,
      mail,
      pseudo,
      avatar,
      streamUrl
    });
    NewPlayer.save()
}
);

module.exports = router;
