// noinspection JSUnresolvedFunction
load('polyfill.js'); // Use new features (node.js style)

// To convert new standard libs to module.export clone them from './build/objs/fs/api_*.js' to './fs/*.js' and export it as you want
let gpio = require('gpio.js');
let system = require('system.js');
let config = require('config.js');

let btnPin = config.get('board.btn1.pin');              // Built-in button GPIO
let ledPin = config.get('board.led1.pin');              // Built-in LED GPIO number
let snsrPin = config.get('app.pin');

gpio.setupOutput(ledPin, 0);
gpio.setupInput(snsrPin, gpio.PULL_UP);

gpio.setButtonHandler(btnPin, gpio.PULL_UP, gpio.INT_EDGE_NEG, 200, function (pin) {
    console.log('Interrupt on button: ', pin);
}, null);

gpio.setInterruptHandler(snsrPin, gpio.INT_EDGE_POS, function (pin) {
    console.log('Interrupt on sensor pin: ', pin);
}, null);

gpio.enableInterrupt(btnPin);
gpio.enableInterrupt(snsrPin);

let intCounter = 0;
let maxInterruptions = 100;

// Run fn every 1 secs & stop after 100 iterations
let intervalId = setInterval(function() {
    gpio.toggle(ledPin);

    intCounter++;

    if (intCounter === maxInterruptions) {
        console.log('Got', maxInterruptions, 'interruptions! Stop interval! Goodbye, world!');
        clearInterval(intervalId);
        return;
    }

    console.log('Device state:', JSON.stringify({
        uptime: system.uptime(),
        freeRam: system.freeRam(),
        stopAfter: maxInterruptions - intCounter,
    }));
}, 1000);