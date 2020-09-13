const socket = io.connect('localhost:9000');

// $form.submit(function(event) {
//     event.preventDefault();
//     socket.emit('send mess', {mess: $textarea.val(), name: $name.val(), className: alertClass});
//     $textarea.val('');
// });

socket.on('action', function(data) {
    $all_messages.append("<div class='alert alert-" + data.className + "'><b>" + data.name + "</b>: " + data.mess + "</div>");
});

$('.send-message-form').onsubmit(() => {
    apppend_message($('.send-message-textarea').value());
});

function apppend_message(text){
    $('.chat').append('<section class="message">\n' +
        '                <img width="50" height="50"\n' +
        '                     src="https://www.meme-arsenal.com/memes/547f571a0ae09614a2e9d93260e15f70.jpg" alt="avatar">\n' +
        '                <div class="content"><h3 style="color: yellow">Username</h3>\n' +
        '                    <p>'+text+'</p></div>\n' +
        '            </section>');
}