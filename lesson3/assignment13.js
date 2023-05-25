// Write a function that takes a number of rows as the argument nStars and logs
// a square of numbers and asterisks. For example, if nStars is 7, log the
// following pattern:

generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

/*
// Original
function generatePattern(nStars) {
  const STAR = '*';
  let numberString = '';

  for(let i = nStars - 1; i >= 0; --i) {
    numberString += (nStars - i);
    console.log(numberString + STAR.repeat(i));
  }
}
*/

// Have you tried supplying generatePattern with a number greater than 9? What
// did you observe? Can you fix the current implementation so that it still
// renders as a rectangle? Try it yourself before scrolling down.

generatePattern(20);

function generatePattern(nStars) {
  const STAR = '*';
  let numberString = '';
  let width = 0;

  for (let i = 1; i <= nStars; ++i) {
    width += String(i).length;
  }

  for(let i = nStars - 1; i >= 0; --i) {
    let numbers = nStars - i;
    numberString += numbers;
    console.log(numberString + STAR.repeat(width - numberString.length));
  }
}
