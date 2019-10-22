const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String
});


// model is always Capitalized and singluar by convention
const Player = mongoose.model('Player', playerSchema);


module.exports = Player;
