// Write a program that asks the user to enter an integer greater than 0, then
// asks if the user wants to determine the sum or the product of all numbers
// between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

const rlSync = require('readline-sync');

let end = parseInt(rlSync.question('Please enter an integer greater than 0: '));
let operation = rlSync.question('Enter "s" to compute the sum, or "p" ' +
                                'to compute the product. ');

console.log(''); // empty line

if (!operation.match(/^[ps]$/)) {
  console.log('Oops. Unknown operation.');
  return;
}

let opString = operation === 's' ? 'sum' : 'product';
let acc = 1;

for(let i = 2; i <= end; ++i) {
  if (operation === 's') acc += i;
  else acc *= i;
}

console.log(`The ${opString} of the integers between 1 and ${end} is ${acc}`);
