import EventEmitter from 'events'
const event=new EventEmitter();
event.once("start",()=>{
    console.log("Executed");
})
event.emit("start");
event.emit("start");
event.emit("start");