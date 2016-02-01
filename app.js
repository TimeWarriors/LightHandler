'use strict';
let Blink1 = require('node-blink1');

// open a blink1 for use
let blink1;
try {
 blink1 = new Blink1('20005E32');

 blink1.version(function(v){
     console.log(v);
 });
 //console.log(Blink1.devices());
} catch(err) {
    console.log("något gick fel");
    console.log(err);
}


try {
    
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    console.log(hours + " : " + minutes);

    changeColor( 1000, 0, 255, 0); 

    setTimeout(() => {
       changeColor( 1000, 255, 255, 255); 
    }, 2000);
    setTimeout(() => {
       changeColor( 1000, 0, 0, 0); 
    }, 4000);
    setTimeout(() => {
       turnOff(blink1);
    }, 5000);
    

} catch(err) {
   console.log(err);  // might get this if your USB port is weird/flaky
}

function changeColor(millisecondsToChange, r, g, b){
    blink1.fadeToRGB( millisecondsToChange, r, g, b);
}
function turnOff(blink){
    blink.off()
}