// Build a program that asks the user to enter the length and width of a room
// in meters, and then logs the area of the room to the console in both square
// meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.
// prompt method to collect user input.

/*
// original:
const SQMETERS_TO_SQFEET = 10.7639;
const rlSync = require('readline-sync');

let length = rlSync.question('Enter the length of the room in meters:\n');
let width = rlSync.question('Enter the width of the room in meters:\n');

let area = length * width; // strings get coerced to numbers
let areaInFeet2 = area * SQMETERS_TO_SQFEET;


console.log(`The area of the room is ${area.toFixed(2)} square meters` +
            `(${areaInFeet2.toFixed(2)} square feet).`);
*/

// Further Exploration
// Modify the program so that it asks the user for the input type (meters or
// feet). Compute for the area accordingly, and log it and its conversion in
// parentheses.

const SQMETERS_TO_SQFEET = 10.7639;
const rlSync = require('readline-sync');

let meters;

while (meters === undefined) {
  let measure = rlSync.question('Meters or Feet? (m / f):\n').toLowerCase();
  if ('feet'.startsWith(measure)) meters = false;
  else if ('meters'.startsWith(measure)) meters = true;
}

let measure1 = meters ? 'meters' : 'feet';
let measure2 = meters ? 'feet' : 'meters';

let length = rlSync.question(`Enter the length of the room in ${measure1}:\n`);
let width = rlSync.question(`Enter the width of the room in ${measure1}:\n`);

let area1 = length * width; // Will coerce into numbers
let area2 = meters ? area1 * SQMETERS_TO_SQFEET : area1 / SQMETERS_TO_SQFEET;

console.log(`The area of the room is ${area1.toFixed(2)} square ${measure1}` +
            `(${area2.toFixed(2)} square ${measure2}).`);
