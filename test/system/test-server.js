var request = require('supertest');
var app = require('../../server');

describe('GET /users', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/timestamp/1234')
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res.body);
        done();
      });
  });
});