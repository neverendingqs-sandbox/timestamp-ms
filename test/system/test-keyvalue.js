var request = require('supertest');
var assert = require('chai').assert;
var uuid = require('node-uuid');

var app = require('../../server');

var errorResponse = { error: "Key not found" };

var createUniqueKeyValue = function() {
  var guid = uuid.v4();
  return { key: guid, value: guid };
};

describe('/keyvalue', function() {
  it('shows error message when key does not have a value', function(done) {
    var keyvalue = createUniqueKeyValue();

    request(app)
      .get('/keyvalue/' + keyvalue.key)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.body.error, errorResponse.error);
        done();
      });
  });

  it('redirects to keyvalue when created', function(done) {
    var keyvalue = createUniqueKeyValue();

    request(app)
      .post('/keyvalue')
      .set('Accept', 'application/json')
      .send(keyvalue)
      .redirects(1)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.body.key, keyvalue.key);
        assert.equal(res.body.value, keyvalue.value);
        done();
      });
  });
});

