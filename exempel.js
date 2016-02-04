'use strict'
let LightHandler = require('./lightHandler.js');
let lightHandler = new LightHandler();

////ändra till grön
lightHandler.changeColor("4", 0, 250, 0);
////ändra till röd
//lightHandler.changeColor("4", 250, 0, 0);

////Brightness låg
//LightHandler.changeBrightness("4", 10);

////Brightness låg
//LightHandler.changeBrightness("4", 255);

////blinka i 10 sek
//lightHandler.toggleWarning("4", true, 500);
//setTimeout(function(){
//    lightHandler.toggleWarning("4", false)
//}, 10000);