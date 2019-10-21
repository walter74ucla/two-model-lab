const express = require('express');
const app     = express();




// home page
app.get('/',(req, res) => {
  res.render('index.ejs')
});


const teamsController = require('./controllers/teams.js');
app.use('/teams', teamsController);


app.listen(3000, () => {
  console.log('server listening on port', 3000);
});
