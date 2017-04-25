var express = require('express');
var router = express.Router();
var farm = require('../models/Farm');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        farm.getFarmById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        farm.getAllFarms(function(err, rows) {
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
    farm.addFarm(req.body, function(err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

router.delete('/:id', function(req, res, next) {
    farm.deleteFarm(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count)
        }
    });
});

router.put('/:id', function(req, res, next) {
    farm.updateFarm(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;
