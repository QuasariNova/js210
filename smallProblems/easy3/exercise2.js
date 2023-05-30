// Write a program that solicits six numbers from the user and logs a message
// that describes whether the sixth number appears among the first five numbers.

// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].

function digitString(digit) {
  switch (digit) {
    case 1: return '1st';
    case 2: return '2nd';
    case 3: return '3rd';
    default: return `${digit}th`;
  }
}

function appearanceString(arr, target) {
  if (arr.includes(target)) return 'appears';
  return 'does not appear';
}

const rlSync = require('readline-sync');
const nums = [];

for (let idx = 1; idx <= 5; idx += 1) {
  const num = Number(rlSync.question(`Enter the ${digitString(idx)} number: `));
  nums.push(num);
}

const target = Number(rlSync.question('Enter the last number: '));

console.log(
  `The number ${target} ${appearanceString(nums, target)} in [${nums}]`
);

// What if the problem was looking for a number that satisfies some condition
// (e.g., a number greater than 25), instead of a specific number? Would the
// current solution still work? Why or why not? Think about this first before
// scrolling down.

// Our solution wouldn't work because it checks only for the specific number,
// so it only goes off of equality.

// Possible Solution:

// function isIncluded(arr, val) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > val) {
//       return true;
//     }
//   }

//   return false;
// }

// Explore the Array.prototype.some method, and see if you can change the
// possible solution shown above to make use of that method instead.

/*
function isIncluded(arr, val) {
  return arr.some((element) => val > element);
}
*/
