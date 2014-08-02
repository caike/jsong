module.exports = function () {


  return function(req, res, next) {

    res.jsonAPI = function (data, options) {
      var responseData = {};
      responseData[options.collection] = data
      res.end(JSON.stringify(responseData));
    }

    next();
  }
}
