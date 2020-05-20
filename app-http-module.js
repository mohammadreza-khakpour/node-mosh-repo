const Http = require(`http`);
// now server, by nature, is an Instance of EventEmitter class
const server = Http.createServer();
// server has on() and emit() as you see:
server.on(`mmm`,()=>{console.log(`detected`)});
server.emit(`mmm`);