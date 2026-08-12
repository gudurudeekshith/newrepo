import EventEmitter from 'events'
const eventEmitter=new EventEmitter();
function welcome()
{
    console.log("Welcome!");
}
eventEmitter.on("login",welcome);
eventEmitter.emit("login");
eventEmitter.removeListener("login",welcome);
eventEmitter.emit("login");