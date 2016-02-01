'use strict';
let Blink1 = require('node-blink1');
let blink1;


try {
    
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
    else
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
}