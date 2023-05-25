// Write a function named checkGoldbach that uses Goldbach's Conjecture to log
// every pair of primes that sum to the number supplied as an argument. The
// conjecture states that "you can express every even integer greater than 2 as
// the sum of two primes". The function takes as its only parameter, an integer
// expectedSum, and logs all combinations of two prime numbers whose sum is
// expectedSum. Log the prime pairs with the smaller number first. If
// expectedSum is odd or less than 4, your function should log null.


// Your checkGoldbach function may call the isPrime function you wrote for a
// previous practice problem.

function isPrime(number) {
  if (number <= 1) return false;
  if (number > 2 && number % 2 == 0) return false;

  sqrt = Math.floor(Math.sqrt(number));
  for(let i = 3; i <= sqrt; i += 2) {
    if (number % i == 0) return false;
  }

  return true;
}

function getUniqueNumberPairs(total) {
  pairs = [];

  for(let i = 1; i <= total / 2; ++i) {
    pairs.push([i, total - i]);
  }

  return pairs;
}

function checkGoldbach(sum) {
  if (sum % 2 || sum < 4) {
    console.log(null);
    return;
  }

  let pairs = getUniqueNumberPairs(sum);
  for(let pair of pairs) {
    if (isPrime(pair[0]) && isPrime(pair[1])) {
      console.log(`${pair[0]} ${pair[1]}`);
    }
  }
}

checkGoldbach(3);

console.log('');

checkGoldbach(4);

console.log('');

checkGoldbach(12);

console.log('');

checkGoldbach(100);
