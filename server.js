const server = require('http').createServer();

server.on('request', (req, res) => {
  console.log(req.url);
  switch (req.url) {
    case 'home':
      break;
  }
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello world \n');
});

server.listen(8000);
