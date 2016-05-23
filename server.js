var express = require('express');
var bodyParser = require('body-parser')
var timestamp = require('./lib/timestamp');

var app = express();
var port = process.env.PORT || 3000;

var jsonParser = bodyParser.json()

app.get('/', function (req, res) {
  var dtInput = req.query.timestamp
    || req.query.dt
    || null;

  res.json(timestamp.parseDt(dtInput));
});

app.get('/:dtInput', function(req, res) {
  res.json(timestamp.parseDt(req.params.dtInput));
});

app.post('/', jsonParser, function(req, res) {
  var dtInput = req.body.timestamp
    || req.body.dt
    || null;

  res.json(timestamp.parseDt(dtInput));
});

// Must be last route to be registered
var error = function(req, res, next) {
  res.status(404);
  res.send({ error: 'Not Found' });
  return;
};
app.use(error);

app.listen(port);
