// (function(exports, require, module, __filename, __dirname) {


const EventEmitter = require('events');
// const emitter = new EventEmitter();

    console.log(__filename);
    console.log(__dirname);

var url ='http://mylogger.io/log';

class Logger extends EventEmitter  {
    
    log(message) {
        console.log(message);
    
        // raise an event
    this.emit('messageLogged', { id: 1, url: 'http://localhost'});
    
    //raise: logging (data: message)
}

}
module.exports = Logger;
// })
// module.exports.endPont = url;