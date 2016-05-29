var request = require('supertest');
var assert = require('chai').assert;

var app = require('../../server');

describe('/keyvalue', function() {
  it('shows error message when key does not have a value', function(done) {
    var key = require('node-uuid').v4();
    var errorResponse = { error: "Key not found" };

    request(app)
      .get('/keyvalue/' + key)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.body.error, errorResponse.error);
        done();
      });
  });
});

