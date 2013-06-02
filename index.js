var 
  Utils = require('./lib/utils')
, account = require('./lib/api/account')
, users = require('./lib/api/users')
, clips = require('./lib/api/clips')
, lists = require('./lib/api/lists')
, notifications = require('./lib/api/notifications')
;

module.exports = function(username, token) {
  var utils = new Utils(username, token);
  return {
    account: account(utils)
  , users: users(utils)
  , clips: clips(utils)
  , lists: lists(utils)
  , notifications: notifications(utils)
  }
};