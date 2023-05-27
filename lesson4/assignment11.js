// Write a function that takes a sorted array of integers as an argument, and
// returns an array that includes all the missing integers (in order) between
// the first and last elements of the argument.

// Examples:

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []

function missing(arr) {
  if (arr.length === 0) return []

  let first = arr[0];
  let last = arr[arr.length - 1];

  let out = [];
  for(let i = first + 1; i < last; ++i) {
    if (arr.includes(i)) continue;
    out.push(i);
  }

  return out;
}
