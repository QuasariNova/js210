// The array comparison function that we implemented in the Arrays lesson
// (Alternate link if the previous link doesn't work) implicitly assumed that
// when comparing two arrays, any matching values must also have matching index
// positions. The objective of this exercise is to reimplement the function so
// that two arrays containing the same values—but in a different order—are
// considered equal. For example, [1, 2, 3] === [3, 2, 1] should return true.

// Examples:

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true
areArraysEqual([1, '1'], ['1', 1]);                    // true

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  const cpy2 = array2.slice();

  for (let i = 0; i < array1.length; ++i) {
    const index = cpy2.indexOf(array1[i]);
    if (index === -1) return false;

    cpy2.splice(index, 1);
  }

  return true;
}
