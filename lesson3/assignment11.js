// Create a function that computes the Greatest Common Divisor of two positive
// integers.

// gcd(12, 4);   // 4
// gcd(15, 10);  // 5
// gcd(9, 2);    // 1

/* Original
function gcd(a, b) {
  let high = a > b ? a : b;
  let low = b > a ? b : a;

  let remainder = high % low;
  if (!remainder) return low;
  return gcd(low, remainder);
}
*/

// Further Exploration:
// Can you expand it to accept an array of two or more numbers instead?

function gcd(numbers) {
  let current = numbers[0];

  for(let value of numbers.slice(1)) {
    let high = current > value ? current : value;
    let low = value < current ? value : current;

    while (low) {
      let remainder = high % low;
      high = low;
      low = remainder;
    }

    current = high;
  }
  return current;
}
