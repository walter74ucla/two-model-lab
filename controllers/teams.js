const express = require('express');
const router  = express.Router();
const Team  = require('../models/teams');



router.get('/new', (req, res) => {
  res.render('teams/new.ejs');
})


router.post('/', (req, res) => {

  Team.create(req.body, (err, createdTeam) => {
    if(err){
      res.send(err);
    } else {
      // console.log(createdTeam); 
      res.redirect('/teams')
    }

  })

})








module.exports = router;