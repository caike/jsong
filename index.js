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


  return function(req, res, next) {

    res.jsonAPI = function (data, options) {
      var responseData = {};
      responseData[options.collection] = data
      res.end(JSON.stringify(responseData));
    }

    next();
  }
}
