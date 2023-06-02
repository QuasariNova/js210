// Write a function that takes one argument, an array containing integers, and
// returns the average of all the integers in the array, rounded down to the
// integer component of the average. The array will never be empty, and the
// numbers will always be positive integers.

// Examples:

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

function average(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);

  return Math.floor(sum / arr.length);
}
