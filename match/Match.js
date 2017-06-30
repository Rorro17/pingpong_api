// Match.js
var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({
  matchDay: { type: Date},
  namep1: String,
  puntosp1: { type: Number, min: 0, max: 21 },
  namep2: String,
  puntosp2: { type: Number, min: 0, max: 21 },
  winner: String
});
mongoose.model('Match', UserSchema);

module.exports = mongoose.model('Match');