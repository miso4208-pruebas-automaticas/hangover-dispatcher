'use strict'
var express = require('express')
var executeService = require('../services/executeService.js');
var reportsService = require('../services/reportsService');

var router = express.Router();


router.get('/health', function (req, res) {
    res.send('health hangover-dispatcher');
});


/**
 * 
 */
router.post('/test', function (req, res) {
    console.log('execute test: ', JSON.stringify(req.body));

    executeService.executeTest(req.body, function (apps) {
        res.statusCode = 200;
        res.send({ status: "OK" });
    }, function (err) {
        res.statusCode = 404;
        res.send(err);

    })
    return res;
});


router.post('/report', function (req, res) {
    console.log('request report: ', req.body);
    
    reportsService.getReport(req.body, function (result) {
        res.statusCode = 200;
        res.send({ report: result });

    }, function (err) {
        res.statusCode = 404;
        res.send(err);

    })

});





module.exports = router;