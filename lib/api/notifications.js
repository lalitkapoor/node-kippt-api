var
  utils = require('../utils.js')
;


var notifications = module.exports = function (utils) {
  return {
    get: function (data, callback) {
      utils.get('/notifications', data, callback);
    }
  , post: function (data, callback) {
      utils.post('/notifications', data, callback);
    }
  };
};