// Write a function that combines two arrays passed as arguments, and returns a
// new array that contains all elements from both array arguments, with each
// element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the
// same number of elements.

// Example:

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

function interleave(arr1, arr2) {
  let result = [];
  arr1.forEach((ele, idx) => result.push(ele, arr2[idx]));

  return result;
}
