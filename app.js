// app.js
var express         = require("express"),
    app             = express(),
    db 				= require('./db'),
    path 			= require('path'),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
	mongoose = require('mongoose');

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());


app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Import Models and controllers
var models = require('./models/user')(app, mongoose);
var UserCtrl = require('./controllers/user');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Example Route
//var router = express.Router();
app.get('/', function(req, res) {
  res.send("Hello YO!");
});
//app.use(router);

// API routes
var users = express.Router();

users.route('/users')
  .get(UserCtrl.findAllUsers)
  .post(UserCtrl.addUser);

users.route('/users/:id')
  .get(UserCtrl.findById)
  .put(UserCtrl.updateUser)
  .delete(UserCtrl.deleteUser);

app.use('/api', users);


//var MatchController = require('./match/MatchController');
//app.use('/matches', MatchController);



module.exports = app;