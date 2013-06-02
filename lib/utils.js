var
  request = require('request')
, baseUrl = 'https://kippt.com/api'
;

var utils = module.exports = function (username, token) {
  this.username = username;
  this.token = token;
};

utils.prototype.get = function (route, data, callback) {
  this.request('get', baseUrl+route, data, callback)
};

utils.prototype.post = function (route, data, callback) {
  this.request('post', baseUrl+route, data, callback)
};

utils.prototype.put = function (route, data, callback) {
  this.request('put', baseUrl+route, data, callback)
};

utils.prototype.patch = function (route, data, callback) {
  this.request('patch', baseUrl+route, data, callback)
};

utils.prototype.delete = function (route, data, callback) {
  this.request('delete', baseUrl+route, data, callback)
};

utils.prototype.request = function(method, url, data, callback) {
  var qs = {};

  if (typeof data === "function") {
    callback = data;
    data = {};
  };

  var options = {
    method: method
  , json: true
  , url: url
  , headers : {
      'X-Kippt-Username': this.username,
      'X-Kippt-API-Token': this.token
    }
  };

  (method.toLowerCase() == 'get') ? options.qs = data : options.body = data;
  request(options, callback);
};