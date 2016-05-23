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

    it('should return with proper values when input is seconds since epoch', function() {
      var timeDto = timestamp.parseDt(1463963297);

      assert.equal(timeDto.unix, 1463963297);
      assert.equal(timeDto.natural, "Mon, 23 May 2016 00:28:17 GMT");
    })

    it('should return with null values when input is null', function() {
      var timeDto = timestamp.parseDt(null);

      assert.equal(timeDto.unix, null);
      assert.equal(timeDto.natural, null);
    });

    it('should return with null values when input is undefined', function() {
      var timeDto = timestamp.parseDt(undefined);

      assert.equal(timeDto.unix, null);
      assert.equal(timeDto.natural, null);
    });

  });
});
