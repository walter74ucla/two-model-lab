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






















module.exports = router;