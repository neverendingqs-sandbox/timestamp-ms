[![Build Status](https://travis-ci.org/neverendingqs-sandbox/nodejs-sampler.svg?branch=master)](https://travis-ci.org/neverendingqs-sandbox/nodejs-sampler)

A series of NodeJS microservices. Hosted on https://neverendingqs-nodejs.herokuapp.com/.

## Timestamp ##
Based on https://www.freecodecamp.com/challenges/timestamp-microservice.

### GET ###

* https://neverendingqs-nodejs.herokuapp.com/timestamp/December%2015,%202015
* https://neverendingqs-nodejs.herokuapp.com/timestamp/1450137600
* https://neverendingqs-nodejs.herokuapp.com/timestamp?timestamp=1450137600
* https://neverendingqs-nodejs.herokuapp.com/timestamp?dt=December%2015,%202015

### POST ###

    POST
    Content-Type: application/json
    {"timestamp": 1450137600 }

    POST
    Content-Type: application/json
    {"dt": "December 15, 2015" }
