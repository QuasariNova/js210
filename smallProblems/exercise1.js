// Log all odd numbers from 1 to 99, inclusive, to the console, with each
// number on a separate line.

// Original:
// for(let num = 1; num < 100; num += 2) console.log(num);

// Repeat this exercise with a technique different from the one that you used,
// and different from the one provided. Also consider adding a way for the user
// to specify the limits of the odd numbers logged to the console.

function oddNumbers(start, end) {
  if (start === undefined) start = 1;
  if (end === undefined) end = start + 99;

  let number = start;
  while(number < end) {
    if (number % 2) console.log(number);
    number++;
  }
}

oddNumbers(0, 30);
