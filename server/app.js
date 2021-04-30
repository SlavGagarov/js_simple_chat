const port = 3000;
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
path = require('path')

app.set('port', port);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/chat.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/chat.js'));
});

server.listen(process.env.port || port, function() {
  console.log('Hosting Server at port ' + port);
});


const connnections = [];

io.on('connection', (socket) => {
  socket.on('chatter connected', function(name, color) {
    console.log('chatter connected');
    connnections.push(socket);
  });

  socket.on('update', function(data) {
    console.log('update');
    io.sockets.emit('update', data);
  });  
})