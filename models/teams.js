const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String
});


// model is always Capitalized and singluar by convention
const Team = mongoose.model('Team', teamSchema);


module.exports = Team;
