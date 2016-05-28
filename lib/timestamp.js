var timestamp = {};

var TimeDto = function(unix, natural) {
  this.unix = unix;
  this.natural = natural;
};

timestamp.parseDt = function(dtInput) {
  if(dtInput === null || dtInput === undefined) {
    return new TimeDto(null, null);
  }
  
  var asSeconds = parseInt(dtInput);
  if(!isNaN(asSeconds)) {
    return new TimeDto(
      asSeconds,
      new Date(asSeconds * 1000).toUTCString()
    );
  }

  var asDate = new Date(dtInput);
  if(!isNaN(asDate)) {
    return new TimeDto(
      asDate.getTime() / 1000,
      asDate.toUTCString()
    );
  }

  return new TimeDto(null, null);
};

module.exports = timestamp;
