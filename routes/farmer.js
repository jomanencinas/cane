var express = require('express');
var router = express.Router();
var farmer = require('../models/Farmer');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        farmer.getFarmerById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        farmer.getAllFarmers(function(err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function(req, res, next) {
    farmer.addFarmer(req.body, function(err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

router.delete('/:id', function(req, res, next) {
    farmer.deleteFarmer(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count)
        }
    });
});

router.put('/:id', function(req, res, next) {
    farmer.updateFarmer(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;
