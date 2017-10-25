const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'watch');
const currentFiles = fs.readdirSync(dirname);

const logWithTIme = (message) =>
    console.log(`${new Date().toUTCString()}: ${message}`);

fs.watch(dirname, (eventType, filename) => {
    if(eventType === 'rename') {
        const index = currentFiles.indexOf(filename);

        if(index >= 0) {
            currentFiles.splice(index, 1);
            logWithTIme(`${filename} was removed`);
            return;
        }

        currentFiles.push(filename);
        logWithTIme(`${filename} was added`)
    }
    logWithTIme(`${filename} was changed`)
})
