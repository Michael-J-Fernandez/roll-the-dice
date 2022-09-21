const prompt = require('prompt-sync')({ sigint: true });

let sides = prompt("Enter the number of sides for your dice: > ")

if (isNaN(sides)) {
    console.log("Error - Not a Number");
} else {
    console.log(Math.ceil(Math.random() * sides))
}