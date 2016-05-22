var express = require('express');
var querystring = require('querystring');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Must be last route to be registered
var error = function(req, res, next) {
  res.status(404);
  res.send({ error: 'Not Found' });
  return;
};
app.use(error);

app.listen(port);
