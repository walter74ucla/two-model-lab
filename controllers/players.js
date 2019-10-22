const express = require('express');
const router  = express.Router();
const Player  = require('../models/players');


//Index route
router.get('/', (req, res) => {
  Player.find({}, (err, allPlayers) => {
    if(err){
      res.send(err);
    } else {
      res.render('players/index.ejs', {
        players: allPlayers
      });
    }
  })
});


//New route
router.get('/new', (req, res) => {
  res.render('players/new.ejs');
});

//Post route
router.post('/', (req, res) => {
  Player.create(req.body, (err, createdPlayer) => {
    if(err){
      res.send(err);
    } else {
      // console.log(createdPlayer); 
      res.redirect('/players')
    }
  })
});


//Show route
router.get('/:id', (req, res) => {
  Player.findById(req.params.id, (err, foundPlayer) => {
      if(err){
        res.send(err);
      } else {
        res.render('players/show.ejs', {
          player: foundPlayer // foundPlayer response from the db
          // player is the variable in show.ejs
        });
      }
  });
});


//Edit route
router.get('/:id/edit', (req, res) => {
  Player.findById(req.params.id, (err, foundPlayer) => {
    if(err){
      res.send(err);
    } else {
      res.render('players/edit.ejs', {
        player: foundPlayer // foundPlayer is the response from the db
      })
    }
  })
});

//Put route
router.put('/:id', (req,res) => {
  Player.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err,updatedPlayer) => {
    if(err){
      res.send(err)
    } else {
      res.redirect('/players')
    }
  })
});









//Delete route
router.delete('/:id', (req, res) => {
  Player.findByIdAndRemove(req.params.id, (err, response) => {
    if(err){
      res.send(err);
    } else {
      res.redirect('/players')// if successful go back to the index
    }
  });
});




module.exports = router;