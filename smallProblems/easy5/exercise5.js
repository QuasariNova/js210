// Write a function that takes a number as an argument. If the argument is a
// positive number, return the negative of that number. If the argument is a
// negative number, return it as-is.

// Examples:

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
negative(-0);    // -0

/*
// Original
function negative(value) {
  return -Math.abs(value);
}
*/

// Further Exploration
// An alternative solution would be to use the ternary operator
// (e.g., a ? b : c). If you haven't already used it, try refactoring the
// solution using the ternary operator.

function negative(value) {
  return value < 0 || 1 / value === -Infinity ? value : -value;
}
