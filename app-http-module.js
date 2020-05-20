const Http = require(`http`);
// now server, by nature, is an Instance of EventEmitter class
const server = Http.createServer();
// server has on() and emit() as you see:
// server.on(`mmm`,()=>{console.log(`detected`)});
// server.emit(`mmm`);

// 
server.on("connection",(socket)=>{console.log(`New connection.....`)});
server.listen(3000);
console.log(`listening on port 3000`);
// after writing all these upper lines:
// i type node app-http-module.js to start running the module
// and then last line appears on the console
// then i enter http://localhost:3000/ in my browser
// and `New connection.....` appears in console