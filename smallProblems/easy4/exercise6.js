// Write a function that takes an array of integers as input, multiplies all of
// the integers together, divides the result by the number of entries in the
// array, and returns the result as a string with the value rounded to three
// decimal places.

// Examples:

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

function showMultiplicativeAverage(arr) {
  const product = arr.reduce((acc, val) => acc * val, 1);
  const avg = product / arr.length;

  return avg.toFixed(3);
}
