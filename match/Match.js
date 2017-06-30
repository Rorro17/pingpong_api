// Match.js
var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  namep1: String,
  puntosp1: Number,
  namep2: String,
  puntosp2: Number,
  winner: String
});
mongoose.model('Match', UserSchema);

module.exports = mongoose.model('Match');