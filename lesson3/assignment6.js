// Write a function that iterates over the integers from 1 to 100, inclusive.
// For multiples of three, log "Fizz" to the console. For multiples of five,
// log "Buzz". For numbers which are multiples of both three and five, log
// "FizzBuzz". For all other numbers, log the number.

fizzbuzz();

function fizzbuzz() {
  for(let i = 1; i <= 100; ++i) {
    let fizz = i % 3 ? '': 'Fizz';
    let buzz = i % 5 ? '': 'Buzz';

    console.log(fizz + buzz || i);
  }
}
