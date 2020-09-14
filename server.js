const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});



server.listen(process.env.PORT||9000);

const connections = [];
const messages = [];

io.sockets.on('connection', (socket) => {
    console.log("Успешное соединение");
    // Добавление нового соединения в массив
    connections.push(socket);


    socket.emit("all mess", messages);

    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Отключились");
    });

    socket.on('send mess', (data) => {
        messages.push(data);
        //io.sockets.emit('add mess', {mess: data.mess, name: data.name, ava: data.ava});
        io.sockets.emit("all mess", messages);
    });

});
