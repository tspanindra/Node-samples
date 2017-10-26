const { Readable } = require('stream');

// const inStream = new Readable();

// inStream.push9'ABJSNFDNWODN');
// inStream.pipe(null);

const inStream = new Readable({
    read(size) {
      setTimeout(() => {
        if(this.currentCharCode > 90) {
            this.push(null);
            return;
        }
        this.push(String.fromCharCode(this.currentCharCode++));
        
        },100);
    }
})

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);