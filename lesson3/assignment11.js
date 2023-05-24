// Create a function that computes the Greatest Common Divisor of two positive
// integers.

// gcd(12, 4);   // 4
// gcd(15, 10);  // 5
// gcd(9, 2);    // 1

function gcd(a, b) {
  let high = a > b ? a : b;
  let low = b > a ? b : a;

  let remainder = high % low;
  if (!remainder) return low;
  return gcd(low, remainder);
}
