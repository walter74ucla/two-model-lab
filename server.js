const express = require('express');
const app     = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');



require('./db/db');

app.use(methodOverride('_method'));//must come before our routes
app.use(bodyParser.urlencoded({extended: false}));


// home page
app.get('/',(req, res) => {
  res.render('index.ejs')
});


const teamsController = require('./controllers/teams.js');
app.use('/teams', teamsController);


app.listen(3000, () => {
  console.log('server listening on port', 3000);
});
