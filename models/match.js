// Match.js
var mongoose = require('mongoose');  

var MatchSchema = new mongoose.Schema({
  matchDay: { type: Date},
  namep1: String,
  pointsp1: { type: Number, min: 0, max: 21 },
  namep2: String,
  pointsp2: { type: Number, min: 0, max: 21 }
});

//mongoose.model('Match', MatchSchema);

//module.exports = mongoose.model('Match');

var Match = mongoose.model('Match', MatchSchema);

module.exports = {
  Match: Match
}