'use strict'
let LightHandler = require('./lightHandler.js');
let lightHandler = new LightHandler();

lightHandler.changeColor("4", 0, 250, 0);
lightHandler.toggleWarning("4", true, 500);
setTimeout(function(){
    lightHandler.toggleWarning("4", false)
}, 10000);