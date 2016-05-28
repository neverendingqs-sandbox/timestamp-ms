var express = require('express');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var router = express.Router();

var kvCollection;

module.exports = function(db) {
  kvCollection = db.collection('keyvalue');

  router.get('/:key', function(req, res) {
    kvCollection.findOne(
      { key: req.params.key },
      function(err, result) {
        if(err) {
          res.json({
            error: 'Error retrieving value',
            error_message: err
          });
          return;
        }

        if(!result) {
          res.json({ error: 'Key not found' });
          return;
        }

        res.json({
          key: result.key,
          value: result.value
        });
      }
    );
  });

  router.post('/', jsonParser, function(req, res) {
    var key = req.body.key;
    var value = req.body.value;

    kvCollection.update(
      { key: key },
      { $set: { value: value } },
      { upsert: true },
      function(err, result) {
        if(err) {
          res.json({
            error: 'Error saving to database',
            error_message: err
          });
          return;
        }

        res.redirect(req.baseUrl + '/' + key);
      }
    );
  });

  return router;
};