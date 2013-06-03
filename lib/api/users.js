var
  utils = require('../utils.js')
;


var users = module.exports = function (utils) {

  return {
    get: function (userId, data, callback) {
      utils.get('/users/'+userId, data, callback);
    }
  , followers: {
      get: function (userId, data, callback) {
        utils.get('/users/'+userId+'/followers', data, callback);
      }
    }
  , following: {
      get: function (userId, data, callback) {
        utils.get('/users/'+userId+'/following', data, callback);
      }
    }
  , clips: {
      get: function (userId, data, callback) {
        utils.get('/users/'+userId+'/clips', data, callback);
      }
    , favorites: {
        get: function (userId, data, callback) {
          utils.get('/users/'+userId+'/clips/favorites', data, callback);
        }
      }
    , likes: {
        get: function (userId, data, callback) {
          utils.get('/users/'+userId+'/clips/likes', data, callback);
        }
      }
    }
  , lists: {
      get: function (userId, listId, data, callback) {
        if (typeof listId == 'object') {
          callback = data;
          data = listId;
          listId = null;
        } else if (typeof listId == 'function') {
          callback = listId;
          listId = null;
        }

        var route = '/users/'+userId+'/lists';
        if (listId) route+= '/'+listId;
        utils.get(route, data, callback);
      }
    }
  , search: {
      get: function (data, callback) {
        utils.get('/users/search', data, callback);
      }
    }
  , relationship: {
      get: function (userId, data, callback) {
        utils.get('/users/'+userId+'/relationship', data, callback);
      }
    , post: function (userId, data, callback) {
        utils.post('/users/'+userId+'/relationship', data, callback)
      }
    }
  };
};