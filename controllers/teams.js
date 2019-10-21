const express = require('express');
const router  = express.Router();
const Team  = require('../models/teams');



router.get('/new', (req, res) => {
  res.render('teams/new.ejs');
})










module.exports = router;