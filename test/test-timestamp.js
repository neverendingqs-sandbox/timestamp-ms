var timestamp = require('.././lib/timestamp');
var assert = require('chai').assert;

describe('timestamp', function() {
  describe('#parseDt(dtInput)', function() {

    it('should return with null values when input is not a date', function() {
      var timeDto = timestamp.parseDt("a");

      assert.equal(timeDto.unix, null);
      assert.equal(timeDto.natural, null);
    });

    it('should return with proper values when input is a date string', function() {
      var timeDto = timestamp.parseDt("Sun, 22 May 2016 19:29:09 EDT");

      assert.equal(timeDto.unix, 1463959749);
      assert.equal(timeDto.natural, "Sun, 22 May 2016 23:29:09 GMT");
    });
  });
});