const http = require('http');

const longComputaton = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum+=i;
    };
    return sum;
}

const server = http.createServer();

server.on('request', (req, res) => {
    if(req.url === '/compute') {
        const sum = longComputaton();
        return res.end(`Sum is ${sum}`);
    } else {
        res.end('ok');
    }
})


server.listen(3000);