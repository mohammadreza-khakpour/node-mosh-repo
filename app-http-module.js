const Http = require(`http`);
// now server, by nature, is an Instance of EventEmitter class
// const server = Http.createServer();
// server has on() and emit() as you see:
// server.on(`mmm`,()=>{console.log(`detected`)});
// server.emit(`mmm`);

// 
// server.on("connection",(socket)=>{console.log(`New connection.....`)});
const server = Http.createServer((req,res)=>{
    if(req.url === `/`){
        res.write(`<hr/>Hello World !!<hr/>`);
        res.end();
    }
    else if(req.url === `/api/courses`){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.listen(3000);
console.log(`listening on port 3000 .....`);
// after writing all these upper lines:
// i type node app-http-module.js to start running the module
// and then last line appears on the console
// then i enter http://localhost:3000/ in my browser
// and `New connection.....` appears in console