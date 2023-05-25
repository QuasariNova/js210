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

// What if the input was an array of integers instead of just a single integer?
// How would your computeSum and computeProduct functions change? Given that
// the input is an array, how might you make use of the
// Array.prototype.reduce() method?

// Using the reduce method would be easier, I basically mimiced it in my
// solution.

// For sum:
// arr.reduce((acc, num) => acc + num, 0);

// For product:
// arr.reduce((acc, num) => acc * num, 1);
