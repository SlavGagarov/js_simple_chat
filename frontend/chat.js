const socket = io('https://desolate-wave-75104.herokuapp.com/');
//const socket = io('http://localhost:3000/');

const message = document.getElementById('message');
const send_message = document.getElementById('send_message');
send_message.addEventListener('click', sendMsg);
function sendMsg(){
  socket.emit('update', message.value);
}
socket.on('update', function(data) {
  console.log('client update');

  let li = document.createElement('li');
  li.textContent = data;
  chatroom.appendChild(li);
});
