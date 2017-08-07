var app = require('express')();

var server = require('http').Server(app);

var io = require('socket.io')(server);

var redis = require('redis');

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

function logData(message) {
	var d = new Date();
	var time = '[' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '] '
	console.log(time + message);
}

function logMultipleData(message, channel, data) {
	var d = new Date();
	var time = '[' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '] '
	console.log(time + message + channel + data);
}

server.listen(8421, function() {
	logData('Chat server booted on *:8421');
});

io.on('connection', function(socket) {
	logData('New Client Connected');
	var redisClient = redis.createClient();
	redisClient.subscribe('message');
	redisClient.on('message', function (channel, message) {
		logMultipleData('New Message In Queue', channel, message);
		socket.emit(channel, message);
	})
});