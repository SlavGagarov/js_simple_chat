$(function () {
    let socket = io.connect('http://localhost:3000');

    let message = $("#message");
    let send_message = $("#send_message");
    let chatroom = $("#chatroom");
    let feedback = $("#feedback");

    send_message.click(function(){
        console.log("BUTTON CLICKED")
        socket.emit('new_message', {message : message.val()})
    });
    socket.on("new_message", (data) => {
        console.log("MESSAGE")
        feedback.html('');
        message.val('');
        chatroom.append(`
                        <div>
                            <div class="box3 sb14">
                              <p style='color:${data.color}' class="chat-text user-nickname">${data.username}</p>
                              <p class="chat-text" style="color: rgba(0,0,0,0.87)">${data.message}</p>
                            </div>
                        </div>
                        `)
    });
});