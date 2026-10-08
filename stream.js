const fs = require('fs');

const rs = fs.createReadStream('./files/big.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/new-big.txt');

/*
rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
})
    */
rs.pipe(ws);