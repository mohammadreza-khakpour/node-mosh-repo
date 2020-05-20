// const incomingarray = require(`./data.js`);
// console.log(incomingarray.thearray[0]);
/////////
// let incoming = require(`./data2.js`);
// console.log(incoming.outgoingTests[0]["Test results"]);
// console.log(incoming.outgoingTests[1]["Test results"]);
/////////
// Using Node built-in modules
const MyEventEmitter = require(`events`);
const myEmitter = new MyEventEmitter();
myEmitter.on(`a-message`,()=>{console.log(`some message`)});
myEmitter.emit(`a-message`);