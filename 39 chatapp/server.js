const socket = new WebSocket('ws://localhost:5500');

socket.onopen(() => {
  socket.send('Hello!');
});

socket.onmessage(data => {
  console.log(data);
});