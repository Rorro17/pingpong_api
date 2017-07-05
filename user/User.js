// User.js
var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  name: {type: String, index: true, unique: true},
  profilepic: {type: String}
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');