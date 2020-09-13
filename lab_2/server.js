const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});


server.listen(9000);

const connections = [];

io.sockets.on('connection', (socket) => {
    console.log("Успешное соединение");
    // Добавление нового соединения в массив
    connections.push(socket);

    // Функция, которая срабатывает при отключении от сервера
    socket.on('disconnect', function(data) {
        // Удаления пользователя из массива
        connections.splice(connections.indexOf(socket), 1);
        console.log("Отключились");
    });

    // Функция получающая сообщение от какого-либо пользователя
    socket.on('send mess', function(data) {
        // Внутри функции мы передаем событие 'add mess',
        // которое будет вызвано у всех пользователей и у них добавиться новое сообщение
        io.sockets.emit('add mess', {mess: data.mess, name: data.name, className: data.className});
    });

});
