// Build a program that asks the user to enter the length and width of a room
// in meters, and then logs the area of the room to the console in both square
// meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.
// prompt method to collect user input.

const SQMETERS_TO_SQFEET = 10.7639;
const rlSync = require('readline-sync');

let length = rlSync.question('Enter the length of the room in meters:\n');
let width = rlSync.question('Enter the width of the room in meters:\n');

let area = length * width; // strings get coerced to numbers
let areaInFeet2 = area * SQMETERS_TO_SQFEET;


console.log(`The area of the room is ${area.toFixed(2)} square meters` +
            `(${areaInFeet2.toFixed(2)} square feet).`);
