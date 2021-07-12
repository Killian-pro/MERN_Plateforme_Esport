var express = require('express');
var router = express.Router();
const Games = require('../models/Games');


/* GET users listing. */
router.route('/').post((req,res)=>
{
  const name =req.body.name;

  const NewGames = new Games(
    {
        name
    });
    NewGames.save()
}
);

module.exports = router;
