// Write a function named arraysEqual that takes two arrays as arguments. The
// function should return true if the arrays contain the same values, or false
// if they do not.

// Test the function with arrays that contain number, string, and boolean
// values. Don't worry about handling arrays that contain other Arrays or
// Objects.

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}
