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

function generatePattern(nStars) {
  const STAR = '*';
  let numberString = '';

  for(let i = nStars - 1; i >= 0; --i) {
    numberString += (nStars - i);
    console.log(numberString + STAR.repeat(i));
  }
}
