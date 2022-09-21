const prompt = require('prompt-sync')({ sigint: true });

let userNum = Number(prompt("Enter the number (1-6) you want to rig: "));
let roll = Math.ceil(Math.random() * 7);

if (userNum >= 1 && userNum <= 6) {
    if (roll === 7) {
        console.log(userNum)
    } else {
        console.log(roll);
    }
} else {
    console.log("Error - Invalid Entry");
}



/*------------------------------------------------------------

*** This is my original interpretation of the problem. 
*** For personal reference only. Please disregard for grading.

const prompt = require('prompt-sync')({ sigint: true });

let userNumber = Number(prompt("Enter the number (1-6) you want to rig: > "))

let dice = Math.ceil(Math.random() * 6);
let rig = Math.ceil(Math.random() * 6);

if (userNumber >= 1 && userNumber <= 6) {
    if (rig === userNumber) {
        console.log(rig);
    } else {
        console.log(dice);
    }
} else {
    console.log("Error - Invalid Entry");
}
------------------------------------------------------------*/