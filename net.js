process.stdout.write('sample');
let counter = 0;
let sockets = {};

function timestamp() {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}
const server = require('net').createServer();

server.on('connection', socket => {
  socket.id = counter++;
  console.log(`${socket.id}: `, 'Client Connected');
  socket.write('Please type your name\n');

  socket.on('data', data => {
    if (!sockets[socket.id]) {
      socket.name = data.toString().trim();
      socket.write(`welcome ${socket.name}! \n`);
      sockets[socket.id] = socket;
      return;
    }
    console.log(' ${socket.name}:', data);

    Object.entries(sockets).forEach(([key, cSocket]) => {
      if (socket.id == key) {
        return;
      }
      cSocket.write(`${socket.name} ${timestamp()}: `);
      cSocket.write(data);
    });
  });

  socket.setEncoding('utf8');

  socket.on('end', () => {
    delete sockets[socket.id];
    console.log(`${socket.name}: `, 'Disconnected');
  });
});

server.listen(8000, () => console.log('server bound'));
