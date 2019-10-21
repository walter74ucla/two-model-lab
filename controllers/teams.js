const express = require('express');
const router  = express.Router();
const Team  = require('../models/teams');


//Index route
router.get('/', (req, res) => {

  Team.find({}, (err, allTeams) => {
    if(err){
      res.send(err);
    } else {
      res.render('teams/index.ejs', {
        teams: allTeams
      });
    }
  })


})

//New route
router.get('/new', (req, res) => {
  res.render('teams/new.ejs');
})

//Post route
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