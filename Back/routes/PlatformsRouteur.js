var express = require('express');
var router = express.Router();
const Platforms = require('../models/Platforms');


/* GET users listing. */
router.route('/').post((req,res)=>
{
  const name =req.body.name;

  const NewPlatforms = new Platforms(
    {
        name
    });
    NewPlatforms.save()
}
);

module.exports = router;
