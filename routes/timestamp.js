var express = require('express');
var bodyParser = require('body-parser');

var timestamp = require('../lib/timestamp');

var jsonParser = bodyParser.json();
var router = express.Router();

router.get('/', function (req, res) {
  var dtInput = req.query.timestamp ||
    req.query.dt ||
    null;

  res.json(timestamp.parseDt(dtInput));
});

router.get('/:dtInput', function(req, res) {
  res.json(timestamp.parseDt(req.params.dtInput));
});

router.post('/', jsonParser, function(req, res) {
  var dtInput = req.body.timestamp ||
    req.body.dt ||
    null;

  res.json(timestamp.parseDt(dtInput));
});

module.exports = router;