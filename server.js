var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var mongoUri = process.env.MONGODB_URI;

var mongoclient = require('mongodb').MongoClient;

mongoclient.connect(mongoUri, function(err, db) {
  if (err) { return console.log(err); }

  app.get('/', function (req, res) {
    res.send('Hello! More details about this site at <a href="https://github.com/neverendingqs-sandbox/nodejs-sampler">https://github.com/neverendingqs-sandbox/nodejs-sampler</a>.');
  });

  app.use('/timestamp', require('./routes/timestamp'));
  app.use('/keyvalue', require('./routes/keyvalue')(db));
  app.use(require('./routes/error'));       // Must be last route to be registered

  app.listen(port);
});
