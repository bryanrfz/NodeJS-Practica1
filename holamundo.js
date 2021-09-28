const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('mensaje', () => {
    console.log('gola');
});

const { readFile, readFileSync } = require('fs');
readFile('./texto.txt','utf8', (err,txt)=> {

    console.log(txt);
});



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end('Hola mundo, empiezo con nodejs!\n');
  //eventEmitter.emit('mensaje');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});