var
  utils = require('../utils.js')
;


var clips = module.exports = function (utils) {
  var utils = utils;

  return {
    get: function (params, data, callback) {
      var route = '/clips';
      if (params.clipId) route+= '/'+params.clipId;
      utils.get(route, data, callback);
    }
  , post: function (data, callback) {
      utils.post('/clips', data, callback);
    }
  , put: function (params, data, callback) {
      utils.put('/clips/'+params.clipId, data, callback);
    }
  , delete: function (params, callback) {
      utils.delete('/clips/'+params.clipId, callback);
    }

  , feed: {
      get: function (data, callback) {
        utils.get('/clips/feed', data, callback);
      }
    }
  , favorites: {
      get: function (data, callback) {
        utils.get('/clips/favorites', data, callback);
      }
    }
  , favorite: {
      post: function (params, data, callback) {
        utils.post('/clips/'+params.clipId+'/favorite', data, callback);
      }
    , delete: function (params, callback) {
        utils.delete('/clips/'+params.clipId+'/favorite', callback);
      }  
    }
  , comments: {
      get: function (params, data, callback) {
        utils.get('/clips/'+params.clipId+'/comments', data, callback);
      }
    , post: function (params, data, callback) {
        utils.post('/clips/'+params.clipId+'/comments', data, callback);
      }
    , delete: function (params, callback) {
        utils.delete('/clips/'+params.clipId+'/comments/'+params.commentId, callback);
      }
    }
  , likes: {
      get: function (params, data, callback) {
        utils.get('/clips/'+params.clipId+'/likes', data, callback);
      }
    , post: function (params, data, callback) {
        utils.post('/clips/'+params.clipId+'/likes', data, callback);
      }
    , delete: function (params, callback) {
        utils.delete('/clips/'+params.clipId+'/likes', callback);
      }
    }
  , search: {
      get: function (data, callback) {
        utils.get('/clips/search', data, callback);
      }
    }
  };
};