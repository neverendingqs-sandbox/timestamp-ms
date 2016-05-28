var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello! More details about this site at <a href="https://github.com/neverendingqs-sandbox/nodejs-sampler">https://github.com/neverendingqs-sandbox/nodejs-sampler</a>.');
});

app.use('/timestamp', require('./routes/timestamp'));

// Must be last route to be registered
var error = function(req, res, next) {
  res.status(404);
  res.send({ error: 'Not Found' });
  return;
};
app.use(error);

app.listen(port);
