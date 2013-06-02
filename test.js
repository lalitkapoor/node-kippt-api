var Kippt = require('./index');

var client = new Kippt('USERNAME_HERE', 'API_TOKEN_HERE');

console.log(client);

var cb = function(error, response, body) {console.log(error, response.body)};
client.users.get({userId:'lalit'}, cb);