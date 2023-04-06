
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