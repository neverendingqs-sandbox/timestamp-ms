var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use('/timestamp', require('./routes/timestamp'));

// Must be last route to be registered
var error = function(req, res, next) {
  res.status(404);
  res.send({ error: 'Not Found' });
  return;
};
app.use(error);

app.listen(port);
