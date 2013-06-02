var
  utils = require('../utils.js')
;


var account = module.exports = function (utils) {
  var utils = utils;

  return {
    get: function (callback) {
      utils.get('/account/', callback);
    }
  };
};