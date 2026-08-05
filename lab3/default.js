import EventEmitter from 'events'
const event=new EventEmitter();
event.setMaxListeners(15);
for(let i=1;i<=11;i++)
{
    event.on("message",()=>{
        console.log(`Listener ${i} executed`);
    });
}
event.emit("message");