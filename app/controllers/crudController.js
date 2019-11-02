'use strict'
var express = require('express')
var crudService = require('../services/crudService.js');

var router = express.Router();

router.get('/types', function (req, res) {
    crudService.getTypes(req, function (result) {
        res.statusCode = 200;
        res.send({ types: result });

    }, function (err) {
        res.statusCode = 404;
        res.send(err);
    })
});

router.post('/types', function (req, res) {
    crudService.createTypes(req.body, function (result) {
        res.statusCode = 200;
        res.send({ types: result });

    }, function (err) {
        res.statusCode = 404;
        res.send(err);
    })
});

router.get('/levels', function (req, res) {
    crudService.getLevels(req, function (result) {
        res.statusCode = 200;
        res.send({ levels: result });

    }, function (err) {
        res.statusCode = 404;
        res.send(err);
    })
});

router.post('/levels', function (req, res) {
    crudService.createLevel(req.body, function (result) {
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