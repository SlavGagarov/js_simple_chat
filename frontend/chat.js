var socket = io('https://desolate-wave-75104.herokuapp.com/', {transports: ['websocket']});
//var socket = io('http://localhost:3000/');

let message = document.getElementById('message');
let chatroom = document.getElementById('chatroom');
let send_message = document.getElementById('send_message');

socket.emit('chatter connected', 'Slav');

socket.on('update', function(data) {
    console.log('client update');

    let li = document.createElement('li');
    li.textContent = data;
    chatroom.appendChild(li);
});

send_message.onclick = function(){
    console.log("clicked");
    socket.emit('update', message.value);
};
