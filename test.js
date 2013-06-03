var config = require('./config');
var Kippt = require('./index');

var client = new Kippt(config.username, config.token);

var cb = function (error, response, body) { 
  (error != null) ? console.log(error, response.body) : console.log(response.body);
};

client.users.get('lalit', cb);
client.users.followers.get('lalit', cb);