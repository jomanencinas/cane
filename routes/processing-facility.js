var express = require('express');
var router = express.Router();
var processingFacility = require('../models/ProcessingFacility');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        processingFacility.getProcessingFacilityById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        processingFacility.getAllProcessingFacilities(function(err, rows) {
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
    processingFacility.addProcessingFacility(req.body, function(err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

router.delete('/:id', function(req, res, next) {
    processingFacility.deleteProcessingFacility(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count)
        }
    });
});

router.put('/:id', function(req, res, next) {
    processingFacility.updateProcessingFacility(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;
