// const express = require('express');
// const app = express();
// const socket = require('socket.io');

// const server = app.listen(3000, ()=>{
//     console.log('Listening to sport 3000...');
// });

// app.use(express.static('public'));
// //server side

// var io = socket(server);

// io.on('connection',(socket)=>{
//     console.log('Connection Established');

//     socket.on('chat',(data)=>{
//         io.sockets.emit('chat',data);
//     });
// });

const express = require('express');
const socket = require('socket.io');
const app = express();
var port = process.env.PORT || 3000;
const server = app.listen(3000, ()=>{
    console.log('listening to port 3000..');
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection',(socket)=>{
    console.log('New User');
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    });
});










