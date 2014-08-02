# Jsong

This is a library that serializes JSON-API for Node HTTP.

Example using Express:

```javascript
var express = require('express');
var app = express();

var jsong = require('jsong');
app.use(jsong.jsonAPI());

app.get('/guitars', function (request, response) {
  var guitars = [
    { company: 'Gibson' },
    { company: 'Jackson' },
    { company: 'Fender' }
  ];

  response.jsonAPI(guitars, { collection: 'guitars' });

  /*
    {
      'guitars': [
        { company: 'Gibson' },
        { company: 'Jackson' },
        { company: 'Fender' }
      ]
    }
  */
});

app.get('/guitars/:model', function (request, response) {
  var guitar = Guitar.findByModel(request.model);
  response.jsonAPI(guitar, { model: 'guitar' });
  /*
    {
      'guitar': {
        { company: 'Gibson' },
      }
    }
  */

})
```
