// const incomingarray = require(`./data.js`);
// console.log(incomingarray.thearray[0]);
/////////////////
// let incoming = require(`./data2.js`);
// console.log(incoming.outgoingTests[0]["Test results"]);
// console.log(incoming.outgoingTests[1]["Test results"]);
//////////////////
//////// Using Node built-in modules
// const MyEventEmitter = require(`events`);
// const myEmitter = new MyEventEmitter();
// myEmitter.on(`a-message`,()=>{console.log(`some message`)});
// myEmitter.emit(`a-message`);
/////// now adding event arguments to it
// const myEE01 = require(`events`);
// const myEE = new myEE01();
// // listener:
// myEE.on(`noise`,(aargument)=>{console.log(aargument)});
// // emitter:
// myEE.emit(`noise`,{userId:574, userName: `natalia bowman`});
////////////////////
const Logger = require(`./logger`);
const myLoggerInstance = new Logger();
myLoggerInstance.on(`emitmessage`,(argz)=>{console.log(argz)})
myLoggerInstance.log(`hello`);