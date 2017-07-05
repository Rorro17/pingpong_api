// app.js
var express = require('express');
var app = express();
var db = require('./db');
var path = require('path');
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");

app.get('/', function(req,res) {
	res.send('Hello');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());


// ADD THESE TWO LINES
var UserController = require('./user/UserController');
app.use('/users', UserController);

var MatchController = require('./match/MatchController');
app.use('/matches', MatchController);

var table = require('./routes/table');
app.use('/table', table);

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

module.exports = app;