var config = require('./config');
var Kippt = require('./index');

var client = new Kippt(config.username, config.token);

var cb = function (error, response, body) { 
  (error != null) ? console.log(error, response.body) : console.log(response.body);
};

client.users.get('lalit', cb);
client.users.followers.get('lalit', cb);
client.users.following.get('lalit', cb);
client.users.relationship.get('lalit', cb);
client.users.clips.get('lalit', cb);
client.users.clips.likes.get('lalit', cb);
client.users.lists.get('lalit', cb);
client.users.lists.get('lalit', 2, cb);
client.users.search.get({q: 'lalit'}, cb);
// client.users.relationships.post('lalit', {data: 'blah'}, cb);