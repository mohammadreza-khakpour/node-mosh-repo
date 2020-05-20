// wanna extend EventEmitter
const MyEventEmitter = require(`events`);
//
class Logger extends MyEventEmitter{
    log(amessage){
        console.log(amessage);
        this.emit(`emitmessage`,{id:457, name:`natalia`});
    }
}
//
module.exports = Logger;