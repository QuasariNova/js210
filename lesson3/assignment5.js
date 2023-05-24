// Write a function logMultiples that takes one argument number. It should log
// all multiples of the argument between 0 and 100 (inclusive) that are also
// odd numbers. Log the values in descending order.

// You may assume that number is an integer between 1 and 100.

logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21

/* Original
function logMultiples(number) {
  for(let i = 100; i >= number; --i) {
    if (i % 2 == 0 || i % number) continue;
    console.log(i);
  }
}
*/

// Further Exploration
// This solution must step through every number between 100 and 0.
// Alternatively, you can determine the number's largest multiple that is less
// than 100, then start the loop with that multiple. With each iteration of the
// loop, you can decrement the number by the argument; when the result is
// negative, you can quit.

function logMultiples(number) {
  for(let i = Math.floor(100 / number) * number; i >= 0; i -= number) {
    if (i % 2 == 0) continue;
    console.log(i);
  }
}
