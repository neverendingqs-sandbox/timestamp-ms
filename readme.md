[![Build Status](https://travis-ci.org/neverendingqs-sandbox/nodejs-sampler.svg?branch=master)](https://travis-ci.org/neverendingqs-sandbox/nodejs-sampler)

A series of NodeJS microservices. Hosted on https://neverendingqs-nodejs.herokuapp.com/.

## Key Value Store ##
A simple microservice that stores a value based on a key. Note that this is a shared key value storage, meaning anyone can view and overwrite your key/value pairs. Example's value may or may not match actual value stored by the service.

### GET ###
* https://neverendingqs-nodejs.herokuapp.com/keyvalue/k

### POST ###

    POST /keyvalue HTTP/1.1
    Content-Type: application/json
    {"key": "k", "value": "v"}

## Timestamp ##
Based on https://www.freecodecamp.com/challenges/timestamp-microservice.

### GET ###

* https://neverendingqs-nodejs.herokuapp.com/timestamp/December%2015,%202015
* https://neverendingqs-nodejs.herokuapp.com/timestamp/1450137600
* https://neverendingqs-nodejs.herokuapp.com/timestamp?unix=1450137600
* https://neverendingqs-nodejs.herokuapp.com/timestamp?natural=December%2015,%202015
