// Write a function that takes a positive integer as an argument, and logs all
// the odd numbers from 1 to the passed in number (inclusive). All numbers
// should be logged on separate lines.

/* Original
function logOddNumbers(target) {
  for(let i = 1; i <= target; i += 2) {
    console.log(i);
  }
}
*/

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

// Further exploration:
// Instead of a conditional that checks for odd numbers, you can write a
// conditional that checks for even numbers, but skips them with the continue
// statement. How would you write your code?

function logOddNumbers(target) {
  for(let i = 1; i <= target; ++i) {
    if (i % 2 == 0) continue;
    console.log(i);
  }
}
