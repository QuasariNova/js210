// Write a function that counts the number of occurrences of each element in a
// given array. Once counted, log each element alongside the number of
// occurrences.

// Example:

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

function countOccurrences(arr) {
  const counts = {};

  for (const value of arr) {
    counts[value] = counts[value] || 0;
    counts[value] +=  1;
  }

  for (const key in counts) console.log(`${key} => ${counts[key]}`);
}
