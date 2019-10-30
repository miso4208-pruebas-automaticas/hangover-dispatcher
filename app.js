const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createConnection ({
  host: 'hangover.cxelmrn7jq89.eu-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'admin2019',
  database: 'hangover'
});

db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});
global.db = db;




var app = express();
const port = 5000;
var executeController = require('./app/controllers/executeController.js');
var crudController = require('./app/controllers/crudController.js');

app.options('*', cors());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/execute', [executeController]);
app.use('/crud', [crudController]);

app.use( function (req, res, next) {
    next();
});

app.listen(port, function () {
  console.log('hangover-dispatcher app listening on port 5000!');
});
