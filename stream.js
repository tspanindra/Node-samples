const fs = require('fs');
const file = fs.createWriteStream('./big.file');


for(let i=0; i < 1e6; i++) {
    file.write('dnjkjkfnjkewfbjk skfbkwjafajkfbs.zd .kjbfjk bjb bkuf bkaweb');    
}

file.end();
