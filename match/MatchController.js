// MatchController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var Match = require('./Match');

// ADD THIS PART

// CREATES A NEW MATCH
router.post('/', function (req, res) {

    Match.create({
            matchDay : req.body.matchDay,
            namep1 : req.body.namep1,
            puntosp1 : req.body.puntosp1,
            namep2 : req.body.namep2,
            puntosp2 : req.body.puntosp2,
            winner : req.body.winner
        }, 
        function (err, match) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(match);
        });

});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {

    Match.find({}, function (err, match) {
        if (err) return res.status(500).send("There was a problem finding the match.");
        res.status(200).send(match);
    });

});


// DELETES A MATCH FROM THE DATABASE
router.delete('/:id', function (req, res) {

    Match.findByIdAndRemove(req.params.id, function (err, match) {
        if (err) return res.status(500).send("There was a problem deleting the match.");
        res.status(200).send("Match was deleted.");
    });

});

module.exports = router;