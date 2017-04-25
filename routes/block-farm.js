var express = require('express');
var router = express.Router();
var blockFarm = require('../models/BlockFarm');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        blockFarm.getBlockFarmById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        blockFarm.getAllBlockFarms(function(err, rows) {
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
    blockFarm.addBlockFarm(req.body, function(err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

router.delete('/:id', function(req, res, next) {
    blockFarm.deleteBlockFarm(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count)
        }
    });
});

router.put('/:id', function(req, res, next) {
    blockFarm.updateBlockFarm(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;
