// Write a function that takes a positive integer as an argument, and logs all
// the odd numbers from 1 to the passed in number (inclusive). All numbers
// should be logged on separate lines.

function logOddNumbers(target) {
  for(let i = 1; i <= target; i += 2) {
    console.log(i);
  }
}

logOddNumbers(19);

// output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19
