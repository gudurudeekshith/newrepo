import EventEmitter from 'events'
const eventEmitter=new EventEmitter();
eventEmitter.on("greet",()=>{
    console.log("Hello");
});
eventEmitter.emit("greet");