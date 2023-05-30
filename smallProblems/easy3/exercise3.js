// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const rlSync = require('readline-sync');

const age = Number(rlSync.question('What is your age? '));
const retireAge = Number(
  rlSync.question('At what age would you like to retire? '));
const yearsLeft = retireAge - age;

const year = (new Date()).getFullYear();
const retireYear = year + yearsLeft;

console.log(`\nIt's ${year}. You will retire in ${retireYear}`);
console.log(`You only have ${yearsLeft} years of work to go!`);

// What would happen if the new keyword wasn't used in defining the today
// variable on line 4?

// I don't declare a variable named today, but if we used Date() instead of
// new Date(), it would return a string with the current date and time instead
// of a date object.
