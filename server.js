const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT||9000;

server.listen(PORT, () => console.log(`server started on ${PORT}`));

const connections = [];
const messages = [];
const figures = [];
const users = {};
const names = ['Василий', 'Лёха', 'Олег', 'Андрей', 'Петр', 'Санек', 'Володя',  'Стасян', 'Витёк', 'Игорян', 'Семен']


io.sockets.on('connection', (socket) => {
    console.log("Успешное соединение");
    // Добавление нового соединения в массив
    connections.push(socket);

    //let address = socket.handshake.address;
    console.log(socket);


    socket.emit("all mess", messages, users);
    socket.emit("all figures", figures);

    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Отключились");
    });

    socket.on('send mess', (data) => {
        messages.push(data);

        if(users[data.id] == undefined){
            users[data.id] = {
                name: names[Math.floor(Math.random()*names.length)],
                ava: Math.ceil(Math.random()*9)
            };
        }



        //io.sockets.emit('add mess', {mess: data.mess, name: data.name, ava: data.ava});
        io.sockets.emit("all mess", messages, users);
    });

    socket.on("add figure", data => {
        figures.push(data);
        io.sockets.emit("send figure", data, users)
    });
    socket.on("erase all", (id) => {
        figures.splice(0, figures.length);
        io.sockets.emit("erase all", id, users);
    })

});
