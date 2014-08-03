var http = require('http');
var request = require('supertest');
var jsong = require('..');

// Test data
var guitars = [{ company: 'Gibson' },
  { company: 'Jackson'}];
var guitar = { company: 'Gibson' };

describe('Serializing', function () {

  describe('collection', function () {


    it('includes root element', function (done) {

      var guitarResponse = {
        'guitars': guitars
      }

      request(createServerCollection())
        .get('/')
        .expect(JSON.stringify(guitarResponse))
        .expect(200, done);
    });

    it('responds with proper Content-Type', function (done) {
      request(createServerCollection())
        .get('/')
        .expect('Content-Type', 'application/json')
        .expect(200, done);
    });
  });

  describe('individual', function () {

    it('includes root element', function (done) {

      var guitarResponse = {
        'guitar': guitar
      }

      request(createServerIndividual())
        .get('/')
        .expect(JSON.stringify(guitarResponse))
        .expect(200, done);
    });

    it('responds with proper Content-Type', function (done) {
      request(createServerIndividual())
        .get('/')
        .expect('Content-Type', 'application/json')
        .expect(200, done);
    });
  });

});

function parseResponse(json) {
  return JSON.parse(json);
}

var jsonAPI = jsong.jsonAPI();

function createServerCollection(){
  return http.createServer(function (req, res) {
    jsonAPI(req, res, function onDone() {
      res.jsonAPI(guitars, { collection: 'guitars' });
    });
  });
}

function createServerIndividual(){
  return http.createServer(function (req, res) {
    jsonAPI(req, res, function onDone() {
      res.jsonAPI(guitar, { model: 'guitar' });
    });
  });
}
