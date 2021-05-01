const io = require('socket.io')();
io.on('connection', client => {
  client.on('update', function(data) {
    console.log('update');
    io.sockets.emit('update', data);
  }); 
}); 
 
io.listen(process.env.PORT || 3000);
