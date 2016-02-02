'use strict';
let Blink1 = require('node-blink1');
let config = require('./config.json')
let blink1;


try {
    console.log(config.userName);
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    console.log(hours + " : " + minutes);

    changeColor("20005E32", 1000, 0, 255, 0); 

    setTimeout(() => {
       changeColor("20005E32", 1000, 255, 255, 255); 
    }, 2000);
    setTimeout(() => {
       changeColor("20005E32", 1000, 0, 0, 0); 
    }, 4000);
    setTimeout(() => {
       turnOff("20005E32");
    }, 5000);
    setTimeout(() => {
       warningFlash("20005E32");
    }, 6000);
    

} catch(err) {
   console.log(err);  // might get this if your USB port is weird/flaky
}


function changeColor(lampId, millisecondsToChange, r, g, b){
    let blinkDevices = Blink1.devices();
    if(blinkDevices.indexOf(lampId) != -1)
    {
        blink1 = new Blink1(lampId);
        blink1.fadeToRGB(millisecondsToChange, r, g, b);
        blink1.close();
    }
    else //här ska den köra med en else if mot philips hue istället
    {
        console.log("ingen lampa");
        
    }
}
function turnOff(lampId){
    let blinkDevices = Blink1.devices();
    if(blinkDevices.indexOf(lampId) != -1)
    {
        blink1 = new Blink1(lampId);
        blink1.off()
        blink1.close();
    }
    //här ska den köra med en else if mot philips hue istället
}
function warningFlash(lampId){
    let blinkDevices = Blink1.devices();
    if(blinkDevices.indexOf(lampId) != -1)
    {
        blink1 = new Blink1(lampId);
        blink1.writePatternLine(200, 255, 0, 0, 0);
        blink1.writePatternLine(200, 0, 0, 0, 1);
        blink1.playLoop(0, 1, 10);
        blink1.close();
    }
    //här ska den köra med en else if mot philips hue istället
}