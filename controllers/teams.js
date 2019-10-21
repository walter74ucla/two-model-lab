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
});

//New route
router.get('/new', (req, res) => {
  res.render('teams/new.ejs');
});

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
});

//Edit route
router.get('/:id/edit', (req, res) => {
  Team.findById(req.params.id, (err, foundTeam) => {
    if(err){
      res.send(err);
    } else {
      res.render('teams/edit.ejs', {
        team: foundTeam // foundTeam is the response from the db
      })
    }
  })
});

//Put route
router.put('/:id', (req,res) => {
  Team.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err,updatedTeam) => {
    if(err){
      res.send(err)
    } else {
      res.redirect('/teams')
    }
  })
});

//Show route
router.get('/:id', (req, res) => {
  Team.findById(req.params.id, (err, foundTeam) => {
      if(err){
        res.send(err);
      } else {
        res.render('teams/show.ejs', {
          team: foundTeam // foundTeam response from the db
          // team is the variable in show.ejs
        });
      }
  });
});


//Delete route
router.delete('/:id', (req, res) => {
  Team.findByIdAndRemove(req.params.id, (err, response) => {
    if(err){
      res.send(err);
    } else {
      res.redirect('/teams')// if successful go back to the index
    }
  });
});




module.exports = router;