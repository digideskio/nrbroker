var mosca = require('mosca');

var moscaSettings = { port:1883 };

var server = new mosca.Server(moscaSettings);

server.on('ready', function () {
    console.log('Mosca server is up and running')
});

server.on('clientConnected', function(client) {
    console.log('Client connected', client.id);     
});
