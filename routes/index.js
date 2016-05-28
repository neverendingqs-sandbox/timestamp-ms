var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('Hello! More details about this site at <a href="https://github.com/neverendingqs-sandbox/nodejs-sampler">https://github.com/neverendingqs-sandbox/nodejs-sampler</a>.');
  });

module.exports = router;