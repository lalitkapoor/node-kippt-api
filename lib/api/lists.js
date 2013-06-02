var
  utils = require('../utils.js')
;


var lists = module.exports = function (utils) {
  var utils = utils;

  return {
    get: function (params, data, callback) {
      var route = '/lists';
      if (params.listId) route+= '/'+params.listId;
      utils.get(route, data, callback);
    }
  , post: function (data, callback) {
      utils.post('/lists', data, callback);
    }
  , put: function (params, data, callback) {
      utils.put('/lists/'+params.listId, data, callback);
    }
  , delete: function (params, callback) {
      utils.delete('/lists/'+params.listId, callback);
    }
  , following: {
      get: function (data, callback) {
        utils.get('/lists/following', data, callback);
      }
    }
  , clips: {
      get: function (params, data, callback) {
        utils.get('/lists/'+params.listId+'/clips', data, callback);
      }
    }
  , relationship: {
      get: function (params, data, callback) {
        utils.get('/lists/'+params.listId+'/relationship', data, callback);
      }
    , post: function (params, data, callback) {
        utils.get('/lists/'+params.listId+'/relationship', data, callback);
      }
    }
  , search: {
      get: function (data, callback) {
        utils.get('/lists/search', data, callback);
      }
    }
  };
};