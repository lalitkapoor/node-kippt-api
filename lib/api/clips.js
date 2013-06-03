var
  utils = require('../utils.js')
;


var clips = module.exports = function (utils) {
  return {
    get: function (clipId, data, callback) {
      var route = '/clips';
      if (clipId) route+= '/'+clipId;
      utils.get(route, data, callback);
    }
  , post: function (data, callback) {
      utils.post('/clips', data, callback);
    }
  , put: function (clipId, data, callback) {
      utils.put('/clips/'+clipId, data, callback);
    }
  , del: function (clipId, callback) {
      utils.del('/clips/'+clipId, callback);
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
      post: function (clipId, data, callback) {
        utils.post('/clips/'+clipId+'/favorite', data, callback);
      }
    , del: function (clipId, callback) {
        utils.del('/clips/'+clipId+'/favorite', callback);
      }  
    }
  , comments: {
      get: function (clipId, data, callback) {
        utils.get('/clips/'+clipId+'/comments', data, callback);
      }
    , post: function (clipId, data, callback) {
        utils.post('/clips/'+clipId+'/comments', data, callback);
      }
    , del: function (clipId, commentId, callback) {
        utils.del('/clips/'+clipId+'/comments/'+commentId, callback);
      }
    }
  , likes: {
      get: function (clipId, data, callback) {
        utils.get('/clips/'+clipId+'/likes', data, callback);
      }
    , post: function (clipId, data, callback) {
        utils.post('/clips/'+clipId+'/likes', data, callback);
      }
    , del: function (clipId, callback) {
        utils.del('/clips/'+clipId+'/likes', callback);
      }
    }
  , search: {
      get: function (data, callback) {
        utils.get('/clips/search', data, callback);
      }
    }
  };
};