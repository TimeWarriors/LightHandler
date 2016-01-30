'use strict';
let Blink1 = require('node-blink1');

// open a blink1 for use
let blink1;

var timeInMss = Date.now()
var date = new Date();
var hour = date.getHours();
var min  = date.getMinutes();


try {
 blink1 = new Blink1.Blink1('20005E32');



 blink1.version(function(v){
     console.log(v);
 });
 //console.log(Blink1.devices());
} catch(err) {
}

try {

   setTimeout(() => {
       blink1.fadeToRGB( 100, 183, 251, 223);
   }, 0);

   setTimeout(() => {
       blink1.fadeToRGB( 550, 222, 108, 14);
   }, 12000);

   setTimeout(() => {
       blink1.fadeToRGB( 200, 26, 163, 14);
   }, 2000);

   setTimeout(() => {
       blink1.fadeToRGB( 100, 125, 15, 201);
       
   }, 3000);


} catch(err) {
   console.log(err);  // might get this if your USB port is weird/flaky
}


console.log("Hello Node");
console.log(timeInMss);
console.log(hour);
console.log(min);