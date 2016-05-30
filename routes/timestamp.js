var express = require('express');
var bodyParser = require('body-parser');

var timestamp = require('../lib/timestamp');

var jsonParser = bodyParser.json();
var router = express.Router();

router.get('/', function (req, res) {
  var dtInput = req.query.unix ||
    req.query.natural ||
    null;

  res.json(timestamp.parseDt(dtInput));
});

router.get('/:dtInput', function(req, res) {
  res.json(timestamp.parseDt(req.params.dtInput));
});

module.exports = router;