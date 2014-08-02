var http = require('http');
var request = require('supertest');
var serializer = require('..');

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
  });
});

function parseResponse(json) {
  return JSON.parse(json);
}

function createServer(){
  var jsonAPI = serializer();

  return http.createServer(function (req, res) {
    jsonAPI(req, res, function onDone() {
      res.jsonAPI(guitars, { collection: 'guitars' });
    });
  });
}