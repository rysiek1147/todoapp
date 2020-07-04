const express = require('express');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);

const tasks = [];

io.on('connection', (socket) => {
  socket.emit('updateData', tasks);
  socket.on('addTask', ({id, name}) => {
    tasks.push({id: id, name: name});
    socket.broadcast.emit('addTask', ({id: id, name: name}));
  });
  socket.on('removeTask', taskId => {
    tasks.splice(taskId, 1);
    socket.broadcast.emit('removeTask', taskId);
    console.log('remove task');
  })
  console.log('new connect');
});