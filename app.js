const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


var app = express();
const port = 5000;
var executeController = require('./app/controllers/executeController.js');

app.options('*', cors());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/execute', [executeController]);

app.use( function (req, res, next) {
    next();
});

app.listen(port, function () {
  console.log('hangover-dispatcher app listening on port 5000!');
});
