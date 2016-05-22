var timestamp = {};

var TimeDto = function(unix, natural) {
    this.unix = unix,
    this.natural = natural
}

timestamp.parseDt = function(dtInput) {
    var asDate = new Date(dtInput);
    if(isNaN(asDate)) {
       return new TimeDto(null, null);
    }

    return new TimeDto(
      asDate.getTime() / 1000,
      asDate.toUTCString()
    );
}

module.exports = timestamp;
