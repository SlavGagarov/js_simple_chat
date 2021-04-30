var socket = io();

let message = $("#message");
let chatroom = document.getElementById('chatroom');
let send_message = $("#send_message");

socket.emit('chatter connected', 'Slav');

socket.on('update', function(data) {
    console.log('client update');

    let li = document.createElement('li');
    li.textContent = data;
    chatroom.appendChild(li);
});




send_message.click(function(){
    console.log("clicked");
    socket.emit('update', message.val());
});
