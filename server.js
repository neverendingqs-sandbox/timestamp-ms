var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var mongoUri = process.env.MONGODB_URI;

var mongoclient = require('mongodb').MongoClient;

app.use('/', require('./routes/index'));
app.use('/timestamp', require('./routes/timestamp'));
app.use('/keyvalue', require('./routes/keyvalue')(mongoUri));
app.use(require('./routes/error'));       // Must be last route to be registered

module.exports = app.listen(port);
