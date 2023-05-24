// Write a function that takes a number argument, and returns true if the
// number is prime, or false if it is not.

// You may assume that the input is always a non-negative integer.

// isPrime(1);   // false
// isPrime(2);   // true
// isPrime(3);   // true
// isPrime(43);  // true
// isPrime(55);  // false
// isPrime(0);   // false

function isPrime(number) {
  if (number <= 1) return false;
  if (number > 2 && number % 2 == 0) return false;

  sqrt = Math.floor(Math.sqrt(number));
  for(let i = 3; i <= sqrt; i += 2) {
    if (number % i == 0) return false;
  }

  return true;
}
