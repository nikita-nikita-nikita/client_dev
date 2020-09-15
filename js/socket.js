const socket = io.connect('https://alcochat.herokuapp.com/');
import paint from "./paint.js";
// const socket = io.connect('localhost:9000');

// $form.submit(function(event) {
//     event.preventDefault();
//     socket.emit('send mess', {mess: $textarea.val(), name: $name.val(), className: alertClass});
//     $textarea.val('');
// });

const default_textarea = $('textarea').height();

let user_id;

if(localStorage.getItem("user_id") == undefined){
    localStorage.setItem("user_id", Math.ceil(Math.random()*999999));
}
user_id = localStorage.getItem("user_id");

// socket.on('add mess', function(data) {
//     if(data.name != name){
//         apppend_message(data.mess, data.name, data.ava, my = false);
//     }
// });

socket.on('all mess', function(data, users){
    $('.chat').empty();
    for(let i in data){
        apppend_message(data[i].mess, users[data[i].id].name, users[data[i].id].ava, data[i].id==user_id);
    }
});

const drawOrErase = ({figure, actionType, color}) => {
    if (actionType === "brush") {
        const oldColor = paint.color;
        paint.color = color;
        paint.drawByCord(figure);
        paint.color = oldColor;
    } else paint.eraseByCord(figure);
}

socket.on("send figure", (data) => {
    if(data.userId !== window.localStorage.getItem("user_id")) {
        drawOrErase(data);
    }
});

socket.on("all figures", (data) => data.forEach(figure => drawOrErase(data)));

let block=document.querySelector('.chat');
block.scrollTop = block.scrollHeight;

$('.send-message-form').submit((event) => {
    event.preventDefault();
    if(!$('.send-message-textarea').val()) return;
    //apppend_message($('.send-message-textarea').val(), name, ava);
    socket.emit('send mess', {mess: $('.send-message-textarea').val(), id: user_id});
    $('.send-message-textarea').val('');
    $('textarea').height(default_textarea);
});

function apppend_message(text, name, ava, my=true){

    $('.chat').append('<section class="animated fadeIn animate__faster message'+(my?' my':'')+'">\n' +
        '                <img width="50" height="50"\n' +
        '                     src="bomji/'+ava+'.jpg" alt="avatar">\n' +
        '                <div class="content"><h3 style="color: yellow">'+name+'</h3>\n' +
        '                    <p>'+text.split('<').join('&lt').split('>').join('&gt')+'</p></div>\n' +
        '            </section>');
    const block=document.querySelector('.chat');
    block.scrollTop = block.scrollHeight;
}

export default socket;
