const dgram = require('dgram');

const PORT = 3333;
const HOST = '127.0.0.1';

const server = dgram.createSocket('udp4');

server.bind(PORT, HOST);
server.on('listening', () => console.log('UDP Server listening'));

server.on('message', (msg, rinfo) => {
  console.log(`${rinfo.address}: ${rinfo.port} - ${msg}`);
});

// client
const client = dgram.createSocket('udp4');
const msg = Buffer.from('Pluralsight rocks');

client.send(msg, 0, msg.length, PORT, HOST, err => {
  if (err) throw err;
  console.log('UDP message sent');
  client.close();
});
