function simpleTimeout(consoleTimer){
    console.timeEnd(consoleTimer);
}
console.time("two seconds");
setTimeout(simpleTimeout,2000,"two seconds");
console.time("one seconds");
setTimeout(simpleTimeout,1000,"one seconds");
console.time("five seconds");
setTimeout(simpleTimeout,5000,"five seconds");
console.time("50M seconds");
setTimeout(simpleTimeout,50,"50M seconds");