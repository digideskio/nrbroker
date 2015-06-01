var mosca = require('mosca')

var moscaSettings = {
  port: 1883
};

var server = new mosca.Server(moscaSettings);
server.on('ready', setup);

server.on('clientConnected', function(client) {
  console.log('client connected', client.id);     
});

function setup() {
	console.log('Mosca server is up and running')
}
