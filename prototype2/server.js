'use strict'

let Blink1 = require('node-blink1');

// open a blink1 for use
let blink1;

try {
 blink1 = new Blink1.Blink1('20005E32');



 blink1.version(function(v){
     console.log(v);
 });
 //console.log(Blink1.devices());
} catch(err) {
}
function insertData(timeShine, r, g, b){
  
    blink1.fadeToRGB( timeShine, r, g, b);


}

function statusAway(r, g, b){
        blink1.fadeToRGB(0, 255, 0, 0);
    }

    function statusOnline(r, g, b){
        blink1.fadeToRGB(0, 0, 255, 0);
    }
    
    function statusBusy(r, g, b){
        blink1.fadeToRGB(0, 255, 247, 0);
    }
    
try {
function time(){
    var date = new Date();
    console.log(date.getMinutes() % 3);
    if (date.getMinutes() % 3 === 0) {
        statusBusy();
    }

    if (date.getMinutes() % 3 === 1) {
            statusOnline();
        }
        
    if (date.getMinutes() % 3 === 2) {
        statusAway();
    }
    
    setTimeout(time, 100);
        
}
time();
//    setTimeout(() => {
//       statusOnline();
//    }, 0);

//    setTimeout(() => {
//        insertData(600, 250, 250, 250);
//    }, 1000);

//    setTimeout(() => {
//        insertData(500, 250, 100, 160);
//    }, 2000);

//    setTimeout(() => {
//        insertData(300, 25, 80, 160);
       
//    }, 3000);


} catch(err) {
   console.log(err);  // might get this if your USB port is weird/flaky
}







console.log("Hello Server!")