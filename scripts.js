
// function sayHello(name) {
//     console.log('hello ' + name);
// }

// sayHello('world');

// // console.log(window);

// // setTimeout();
// // clearTimeout();
// // setInterval();

// // window.console.log;
// // var Message ='';

// // window.Message;
// // globalThis.setTimeout
// // console.log(global.Message);

// // console.log(module);
// const logger = require('./logger');
// console.log(logger);
// // logger.log("sayHello('world')");

// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
// os.freemem()

console.log('Total Memory: ' + totalMemory);

console.log(`Free Memory:  ${freeMemory}`);

const fs = require('fs');

// const files = fs.readdirSync('./');

// console.log(files);

fs.readdir('./', function(err, files) {
if (err) console.log('Error', err);
else  console.log('Result', files);

});
const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.addListener('error', function(err) {

// emitter.on('messageLogged', function(arg) {
// console.log('listener called', arg);
// });
// register a listener

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('listener called', arg);
    });

    logger.log('message');
    logger.log('messageLogged');

    const http = require('http');

    const server = http.createServer((req, res) => {
        
        if (req.url === '/') {
            res.write('hello world');
            res.end();
        }

        if (req.url === '/api/courses') {
            res.write(JSON.stringify([1, 2, 3]));
            res.end();
        }

    });

    // server.on('error', (err) => {throw err});
    // server.on('connection', (socket) => {
    //     console.log('New connection...');
    // });

    server.listen(3001);
    console.log('listening on port 3001...');
