var http = require('http');
var request = require('supertest');
var jsong = require('..');

var guitars = [{ company: 'Gibson' },
  { company: 'Jackson'}];

describe('Serializing', function () {

  describe('collection', function () {


    it('includes root element', function (done) {

      var guitarResponse = {
        'guitars': guitars
      }

      request(createServer())
        .get('/')
        .expect(JSON.stringify(guitarResponse))
        .expect(200, done);
    });

    it('responds with proper Content-Type', function (done) {
      request(createServer())
        .get('/')
        .expect('Content-Type', 'application/json')
        .expect(200, done);
    })
  });

});

function parseResponse(json) {
  return JSON.parse(json);
}

function createServer(){
  var jsonAPI = jsong.jsonAPI();

  return http.createServer(function (req, res) {
    jsonAPI(req, res, function onDone() {
      res.jsonAPI(guitars, { collection: 'guitars' });
    });
  });
}
