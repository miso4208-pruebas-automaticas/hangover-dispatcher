'use strict'
var express = require('express')
var crudService = require('../services/crudService.js');

var router = express.Router();



router.get('/levels', function (req, res) {
    crudService.getLevels(req, function (result) {
        res.statusCode = 200;
        res.send({ levels: result });

    }, function (err) {
        res.statusCode = 404;
        res.send(err);
    })
});

router.get('/applications', function (req, res) {
    crudService.getApplications(req, function (result) {
        res.statusCode = 200;
        res.send({ applications: result });

    }, function (err) {
        res.statusCode = 404;
        res.send(err);
    })
});

router.post('/application', function (req, res) {
    crudService.createApplication(req.body, function (result) {
        res.statusCode = 200;
        res.send({ applications: result });

    }, function (err) {
        res.statusCode = 404;
        res.send(err);
    })
});

router.post('/dataTest', function (req, res) {
    crudService.saveExecuteTest(req.body, function (result) {
        res.statusCode = 200;
        res.send({ applications: result });
    }, function (err) {
        res.statusCode = 404;
        res.send(err);
    })
});










module.exports = router;