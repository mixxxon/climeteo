const trace = (log => console.log(log));

trace("Start");

/*
setTimeout(() => {
    trace("Two seconds function");
}, 2000);

setTimeout(() => {
    trace("Zero seconds function");
}, 0);
*/

setTimeout(t => trace("Two seconds function"), 2000);

setTimeout(t => trace("Zero seconds function"), 0);

trace("End");