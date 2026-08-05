import EventEmitter from 'events'
const event=new EventEmitter();
event.on("login",()=>{
    console.log("Checking username...");
});
event.on("login1",()=>{
    console.log("Checking password...");
});
event.on("login",()=>{
    console.log("Login Successfully.");
});
event.emit("login");
event.emit("login1");