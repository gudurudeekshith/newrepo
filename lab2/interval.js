function sayHello(){
    console.log("Hello");
}
const id=setInterval(sayHello,2000);
setTimeout(() => {
    clearInterval(id);
},11000);