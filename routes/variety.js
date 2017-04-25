var express = require('express');
var router = express.Router();
var variety = require('../models/Variety');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        variety.getVarietyById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        variety.getAllVarieties(function(err, rows) {
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
    variety.addVariety(req.body, function(err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

router.delete('/:id', function(req, res, next) {
    variety.deleteVariety(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count)
        }
    });
});

router.put('/:id', function(req, res, next) {
    variety.updateVariety(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;
