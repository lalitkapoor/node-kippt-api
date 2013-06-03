var
  utils = require('../utils.js')
;


var lists = module.exports = function (utils) {
  return {
    get: function (listId, data, callback) {
      var route = '/lists';
      if (listId) route+= '/'+listId;
      utils.get(route, data, callback);
    }
  , post: function (data, callback) {
      utils.post('/lists', data, callback);
    }
  , put: function (listId, data, callback) {
      utils.put('/lists/'+listId, data, callback);
    }
  , del: function (listId, callback) {
      utils.del('/lists/'+listId, callback);
    }
  , following: {
      get: function (data, callback) {
        utils.get('/lists/following', data, callback);
      }
    }
  , clips: {
      get: function (listId, data, callback) {
        utils.get('/lists/'+listId+'/clips', data, callback);
      }
    }
  , relationship: {
      get: function (listId, data, callback) {
        utils.get('/lists/'+listId+'/relationship', data, callback);
      }
    , post: function (listId, data, callback) {
        utils.get('/lists/'+listId+'/relationship', data, callback);
      }
    }
  , search: {
      get: function (data, callback) {
        utils.get('/lists/search', data, callback);
      }
    }
  };
};