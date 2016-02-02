'use strict';
let Blink1 = require('node-blink1');
let config = require('./config.json')
let http = require('http');
let blink1;


try {
    //getHueLamps();
    //turnOff("00:17:88:01:10:51:a6:fe-0b");
    changeColor("fddfd", 255, 255, 0);
    //changeColor("00:17:88:01:10:51:a6:fe-0b", 0, 255, 0); 
    //changeColor("20005E32", 255, 255, 255, 1000); 
    

} catch(err) {
   console.log(err);  // might get this if your USB port is weird/flaky
}

function getHueLamps(){ //returnerar ingenting just nu
    var options = {
        host: config.hueIp,
        path: "/api/"+config.userName+"/lights",
        method: 'GET'
    };
    http.get(options, function(res) {
      var chunks = [];
      res.on('data', function(chunk) {
        chunks.push(chunk);
      }).on('end', function() {
        var body = Buffer.concat(chunks);
        console.log('BODY: ' + body);
      })
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
}

function changeColor(lampId, r, g, b, millisecondsToChange){
    millisecondsToChange = millisecondsToChange || 1000;
    let blinkDevices = Blink1.devices();
    if(blinkDevices.indexOf(lampId) != -1)
    {
        blink1 = new Blink1(lampId);
        blink1.fadeToRGB(millisecondsToChange, r, g, b);
        blink1.close();
    }
    else //här ska den köra med en else if mot philips hue istället
    {
        var X = r * 0.664511 + g * 0.154324 + b * 0.162028;
        var Y = r * 0.283881 + g * 0.668433 + b * 0.047685;
        var Z = r * 0.000088 + g * 0.072310 + b * 0.986039;
        var x = X / (X + Y + Z);
        var y = Y / (X + Y + Z);
        var bodyMessage = JSON.stringify({
            "xy": [x,y]
        })
        var headers = {
            'Content-Type': 'application/json',
            'Content-Length': bodyMessage.length
        };
        var options = {
            host: config.hueIp,
            path: "/api/"+config.userName+"/lights/1/state",
            method: 'PUT',
            headers: headers
        };
        http.request(options).write(bodyMessage);
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
    else{
        var bodyMessage = JSON.stringify({
            "on":false
        })
        var headers = {
            'Content-Type': 'application/json',
            'Content-Length': bodyMessage.length
        };
        var options = {
            host: config.hueIp,
            path: "/api/"+config.userName+"/lights/1/state",
            method: 'PUT',
            headers: headers
        };
        http.request(options).write(bodyMessage);
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