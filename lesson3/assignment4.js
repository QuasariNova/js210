// Write a function that logs the integers from 1 to 100 (inclusive) that are
// multiples of either 3 or 5. If the number is divisible by both 3 and 5,
// append an "!" to the number.

// multiplesOfThreeAndFive();

// output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// … remainder of output omitted for brevity

/* Original:
function multiplesOfThreeAndFive() {
  for(let i = 1; i <= 100; ++i) {
    if (i % 3 && i % 5) continue;
    out = i % 15 ? String(i) : `${i}!`;
    console.log(out);
  }
}
*/

// Further Exploration
// For additional practice, how would you change your function so it takes, as
// arguments, the range of numbers it should check?

function multiplesOfThreeAndFive(min, max) {
  for(let i = min; i <= max; ++i) {
    if (i % 3 && i % 5) continue;

    out = i % 15 ? String(i) : `${i}!`;
    console.log(out);
  }
}

multiplesOfThreeAndFive(1, 20);
