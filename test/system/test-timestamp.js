var request = require('supertest');
var assert = require('chai').assert;

var app = require('../../server');

describe('/timestamp', function() {
  var dt = {
    unix: 1464546047,
    natural: "Sun, 29 May 2016 18:20:47 GMT"
  };

  describe('GET with query parameter', function() {
    it('query with unix time returns both unix and natural time', function(done) {
      request(app)
        .get('/timestamp/' + dt.unix)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          assert.equal(res.body.unix, dt.unix);
          assert.equal(res.body.natural, dt.natural);
          done();
        });
    });
  });
});
