module.exports = jsong = {};

/*
* Serializes objects to the JSON API format
* http://jsonapi.org/
*
* Usage:
*   response.jsonAPI(objects, { collection: 'rootName' });
*   response.jsonAPI(object, { model: 'rootName' });
*/
jsong.jsonAPI = function () {


  return function(request, response, next) {

    response.jsonAPI = function (data, options) {
      response.setHeader('Content-Type', 'application/json');

      var responseData = {};
      responseData[options.collection] = data
      response.end(JSON.stringify(responseData));
    }

    next();
  }
}
