// app.js
var express = require('express');
var app = express();
var db = require('./db');
var path = require('path');

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