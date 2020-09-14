//const socket = io.connect('https://alcochat.herokuapp.com/');
const socket = io.connect('localhost:9000');

// $form.submit(function(event) {
//     event.preventDefault();
//     socket.emit('send mess', {mess: $textarea.val(), name: $name.val(), className: alertClass});
//     $textarea.val('');
// });

const default_textarea = $('textarea').height();

const names = ['Василий', 'Лёха', 'Олег', 'Андрей', 'Петр', 'Санек', 'Володя',  'Стасян', 'Витёк', 'Игорян']
const name = names[Math.floor(Math.random()*names.length)];
const ava = Math.ceil(Math.random()*9);


socket.on('add mess', function(data) {
    if(data.name != name){
        apppend_message(data.mess, data.name, data.ava, my = false);
    }
});

socket.on('all mess', function(data) {
    $('.chat').empty();
    for(let i in data){
        apppend_message(data[i].mess, data[i].name, data[i].ava, my = (data[i].name==name));
    }
});

let block=document.querySelector('.chat');
block.scrollTop = block.scrollHeight;

$('.send-message-form').submit((event) => {
    event.preventDefault();
    if(!$('.send-message-textarea').val()) return;
    //apppend_message($('.send-message-textarea').val(), name, ava);
    socket.emit('send mess', {mess: $('.send-message-textarea').val(), name: name, ava: ava});
    $('.send-message-textarea').val('');
    $('textarea').height(default_textarea);
});

function apppend_message(text, name, ava, my=true){

    $('.chat').append('<section class="animated fadeIn animate__faster message'+(my?' my':'')+'">\n' +
        '                <img width="50" height="50"\n' +
        '                     src="bomji/'+ava+'.jpg" alt="avatar">\n' +
        '                <div class="content"><h3 style="color: yellow">'+name+'</h3>\n' +
        '                    <p>'+text.replace('<', '&lt').replace('>','&gt')+'</p></div>\n' +
        '            </section>');
    const block=document.querySelector('.chat');
    block.scrollTop = block.scrollHeight;
}
