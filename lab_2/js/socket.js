var socket = io.connect();

// $form.submit(function(event) {
//     event.preventDefault();
//     socket.emit('send mess', {mess: $textarea.val(), name: $name.val(), className: alertClass});
//     $textarea.val('');
// });

socket.on('action', function(data) {
    $all_messages.append("<div class='alert alert-" + data.className + "'><b>" + data.name + "</b>: " + data.mess + "</div>");
});