const { spawn } = require('child_process');

// const child = spawn('pwd');
const child = spawn('wc');
process.stdin.pipe(child.stdin);

child.stdout.on("data", function(data) {
    console.log(`child stdout, ${data}`);
});


