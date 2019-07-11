let module = {exports: null};

function require(path) {
    // noinspection JSUnresolvedFunction
    load(path);
    // console.log('Load path:', path, JSON.stringify(module.exports));
    return module.exports;
}

let console = {log: print};

// noinspection JSUnresolvedFunction
load('api_timer.js');

function setInterval(fn, timeout) {
    return Timer.set(timeout, Timer.REPEAT, fn, null);
}
function setTimeout(fn, timeout) {
    return Timer.set(timeout, 0, fn, null);
}
function clearTimeout(id) {
    return Timer.del(id);
}
function clearInterval(id) {
    return clearTimeout(id);
}