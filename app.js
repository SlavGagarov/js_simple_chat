const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/chat.js', (req, res) => {
  res.sendFile(__dirname + '/chat.js');
});

app.get('/modalScript.js', (req, res) => {
  res.sendFile(__dirname + '/modalScript.js');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});


const connnections = [];

io.on('connection', (socket) => {
    console.log('New user connected');
    connnections.push(socket)
    socket.username = 'Anonymous';
})