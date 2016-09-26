var express = require('express');
var jsonParser = require('body-parser').json();

var router = express.Router();

var kvCollection;

var safeChars = /^[a-zA-Z0-9\-]+$/;

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
    if(!safeChars.test(req.body.key) || !safeChars.test(req.body.value)) {
      res.status(400).json({ error: 'Only alphanumeric characters are allowed.' });
      return;
    }

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