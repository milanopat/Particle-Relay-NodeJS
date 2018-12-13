var firebase = require("firebase");
var Particle = require('particle-api-js');
var particle = new Particle();

// Enter the information associated with your Particle Photon. This can found at www.console.particle.io
var token = ""
var deviceID = ""


// Enter the config info for your Firebase Realtime Database on the Firebase console
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: ""
};

firebase.initializeApp(config);
var database = firebase.database();

var relayOne = database.ref('relayOneStatus/status');
relayOne.on("value", function(snapshot) {
    updateRelayOne(snapshot.val());
    console.log(snapshot.val());
  });

function updateRelayOne(status) {
    if (status == "ON") {
        particle.callFunction({deviceId: deviceID, name:'lightLed0', argument: "ON", auth: token});
    }
    else if (status == "OFF") {
        particle.callFunction({deviceId: deviceID, name:'lightLed0', argument: "OFF", auth: token});
    }  
}


var relayTwo = database.ref('relayTwoStatus/status');
relayTwo.on("value", function(snapshot) {
    updateRelayTwo(snapshot.val());
    console.log(snapshot.val());
  });

function updateRelayTwo(status) {
    if (status == "ON") {
        particle.callFunction({deviceId: deviceID, name:'lightLed1', argument: "ON", auth: token});
    }
    else if (status == "OFF") {
        particle.callFunction({deviceId: deviceID, name:'lightLed1', argument: "OFF", auth: token});
    }  
}


var relayThree = database.ref('relayThreeStatus/status');
relayThree.on("value", function(snapshot) {
    updateRelayThree(snapshot.val());
    console.log(snapshot.val());
  });

function updateRelayThree(status) {
    if (status == "ON") {
        particle.callFunction({deviceId: deviceID, name:'lightLed2', argument: "ON", auth: token});
    }
    else if (status == "OFF") {
        particle.callFunction({deviceId: deviceID, name:'lightLed2', argument: "OFF", auth: token});
    }  
}

var relayFour = database.ref('relayFourStatus/status');
relayFour.on("value", function(snapshot) {
    updateRelayFour(snapshot.val());
    console.log(snapshot.val());
  });

function updateRelayFour(status) {
    if (status == "ON") {
        particle.callFunction({deviceId: deviceID, name:'lightLed3', argument: "ON", auth: token});
    }
    else if (status == "OFF") {
        particle.callFunction({deviceId: deviceID, name:'lightLed3', argument: "OFF", auth: token});
    }  
}