const socket = io.connect('https://alcochat.herokuapp.com/');
//const socket = io.connect('localhost:9000');
import paint from "./paint.js";

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


socket.on("send figure", (data) => {
    console.log(paint.isDrawing)
    if(data.userId === window.localStorage.getItem("user_id")) return;
    if(paint.isDrawing) {
        console.log("added to stack");
        paint.addToStack(data);
    }
    else paint.drawOrErase(data);
});

socket.on("ban nahuy", ()=>{
    while(1){
        alert('ХУЙ');
    }
});

socket.on("all figures", (data) => data.forEach(figure => paint.drawOrErase(figure)));

socket.on("erase all", (id) => {
    if(window.localStorage.getItem("user_id")!==id) paint.eraseAllAction();
});

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
