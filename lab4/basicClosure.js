function outer(){
    let message="Welcome to Node.js";
    function inner(){
        console.log(message);
    }
    return inner;
}
const callback=outer();
callback();