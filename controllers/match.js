//
var mongoose = require('mongoose');
//var Match  = mongoose.model('Match');
var Match = require("../models/match").Match;

//GET - Return all matches in the DB
exports.findAllMatches = function(req, res) {
    Match.find(function(err, matches) {
    if(err) res.send(500, err.message);

    console.log('GET /matches')
        res.status(200).jsonp(matches);
    });
};

//GET - Return a Match with specified ID
exports.findById = function(req, res) {
    Match.findById(req.params.id, function(err, match) {
    if(err) return res.send(500, err.message);

    console.log('GET /match/' + req.params.id);
        res.status(200).jsonp(match);
    });
};

//POST - Insert a new Match in the DB
exports.addMatch = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var match = new Match({
        matchDay : req.body.matchDay,
            namep1 : req.body.namep1,
            pointsp1 : req.body.pointsp1,
            namep2 : req.body.namep2,
            pointsp2 : req.body.pointsp2
    });

    match.save(function(err, match) {
        if(err) return res.send(500, err.message);
    res.status(200).jsonp(match);
    });
};


//PUT - Update a register already exists
exports.updateMatch = function(req, res) {
    Match.findById(req.params.id, function(err, match) {
        matchDay = req.body.matchDay;
            namep1 = req.body.namep1;
            puntosp1 = req.body.puntosp1;
            namep2 = req.body.namep2;
            puntosp2 = req.body.puntosp2;

        match.save(function(err) {
            if(err) return res.send(500, err.message);
      res.status(200).jsonp(match);
        });
    });
};

//DELETE - Delete a Match with specified ID
exports.deleteMatch = function(req, res) {
    Match.findById(req.params.id, function(err, match) {
        match.remove(function(err) {
            if(err) return res.send(500, err.message);
      res.status(200);
        })
    });
};
