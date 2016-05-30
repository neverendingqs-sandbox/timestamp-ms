var request = require('supertest');
var assert = require('chai').assert;

var app = require('../../server');

var dt = {
  unix: 1464546047,
  natural: "Sun, 29 May 2016 18:20:47 GMT"
};

var getTimestamp = function(endpoint, done) {
  request(app)
    .get(endpoint)
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);
      assert.equal(res.body.unix, dt.unix);
      assert.equal(res.body.natural, dt.natural);
      done();
    });
};

describe('/timestamp', function() {
  describe('GET with query parameter', function() {
    it('query with unix time returns both unix and natural time', function(done) {
        getTimestamp('/timestamp/' + dt.unix, done);
    });

    it('query with natural time returns both unix and natural time', function(done) {
        getTimestamp('/timestamp/' + dt.natural, done);
    });
  });

  describe('GET with query string parameter', function() {
    it('query with unix time returns both unix and natural time', function(done) {
        getTimestamp('/timestamp/?unix=' + dt.unix, done);
    });

    it('query with natural time returns both unix and natural time', function(done) {
        getTimestamp('/timestamp/?natural=' + dt.natural, done);
    });
  });
});
