const { spawn } = require('child_process');

// const child = spawn('pwd');
const child = spawn('find', ['.', '-type', 'f']);

child.stdout.on("data", function(data) {
    console.log(`child stdout, ${data}`);
});

child.stderr.on("data", function(data) {
    console.log("child stderr", data);
});

child.on('exit', function(code, signal) {
    console.log(`child process exited with code ${code}, signal ${signal}`);    
});

// other events on child: disconnect, error, message, close
// stdin, stout, stderror


