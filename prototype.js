var Kippt = require('kippt');

var client = new Kippt();

client.users.get({userId: 1}, function(err, res){});
client.users.followers.get({userId: 1}, function(err, res){});
client.users.following.get({userId: 1}, function(err, res){});
client.users.relationship.get({userId: 1}, function(err, res){});
client.users.clips.get({userId: 1}, function(err, res){});
client.users.clips.likes.get({userId: 1}, function(err, res){});
client.users.lists.get({userId: 1}, function(err, res){});
client.users.lists.get({userId: 1, listId: 2}, function(err, res){});
client.users.search.get({q: 'blah'}, function(err, res){});
client.users.relationships.post({userId: 1}, {data: 'blah'}, function(err, res){});


client.users.get(1, function(err, res){});
client.users.followers.get(1, function(err, res){});
client.users.following.get(1, function(err, res){});
client.users.relationship.get(1, function(err, res){});
client.users.clips.get(1, function(err, res){});
client.users.clips.likes.get(1, function(err, res){});
client.users.lists.get(1, function(err, res){});
client.users.lists.get(1, 2, function(err, res){});
client.users.search.get({q: 'blah'}, function(err, res){});
client.users.relationships.post(1, {data: 'blah'}, function(err, res){});


client.users(1).get(function(err, res){});
client.users(1).followers.get(function(err, res){});
client.users(1).following.get(function(err, res){});
client.users(1).relationship.get(function(err, res){});
client.users(1).clips.get(function(err, res){});
client.users(1).clips.likes.get(function(err, res){});
client.users(1).lists.get(function(err, res){});
client.users(1).lists(2).get(function(err, res){});
client.users(1).search.get({q: 'blah'}, function(err, res){});
client.users(1).relationships.post({data: 'blah'}, function(err, res){});


client.users.followers.get()