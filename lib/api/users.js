var
  utils = require('../utils.js')
;


var users = module.exports = function (utils) {
  var utils = utils;

  return {
    get: function (params, data, callback) {
      utils.get('/users/'+params.userId, data, callback);
    }
  , followers: {
      get: function (params, data, callback) {
        utils.get('/users/'+params.userId+'/followers', data, callback);
      }
    }
  , following: {
      get: function (params, data, callback) {
        utils.get('/users/'+params.userId+'/following', data, callback);
      }
    }
  ,  relationship: {
      get: function (params, data, callback) {
        utils.get('/users/'+params.userId+'/relationship', data, callback);
      }
    }
  , clips: {
      get: function (params, data, callback) {
        utils.get('/users/'+params.userId+'/clips', data, callback);
      }
    }
  , lists: {
      get: function (params, data, callback) {
        var route = '/users/'+params.userId+'/lists';
        if (params.listId) route+= '/'+params.listId;
        utils.get(route, data, callback);
      }
    }
  , search: {
      get: function (data, callback) {
        utils.get('/users/search', data, callback);
      }
    }
  , relationship: {
      post: function (params, data, callback) {
        utils.post('/users/'+params.userId+'/relationship', data, callback)
      }
    }
  };
};