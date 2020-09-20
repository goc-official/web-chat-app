// //client side
// const socket = io.connect('http://localhost:3000');

// //query dom

// var message = document.getElementById('message');
// var handle = document.getElementById('handle');
// var btn = document.getElementById('send');
// var output = document.getElementById('output');

// //Emit events

// btn.addEventListener('click',(e)=>{
//     socket.emit('chat',{
//         message : message.value,
//         handle : handle.value,

//     });
// });

// //Listen for events
// socket.on('chat',(data)=>{
//     output.innerHTML += '<p><strong>' + data.handle + ' : </strong>' + data.message + '</p>'
//  }

var userName = prompt('Enter Your Name : ');

var socket = io.connect('http://localhost:3000');

var area = document.getElementById('area');
var message = document.getElementById('message');
var btn = document.getElementById('btn');

btn.addEventListener('click',(e)=>{
    socket.emit('chat',{
        message : message.value,
        userName : userName
    });
});

socket.on('chat',(data)=>{
    area.innerHTML += '<p><strong>' + data.userName + ' :- </strong>' + data.message + '</p>';
});











