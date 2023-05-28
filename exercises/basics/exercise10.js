// In the previous exercise, you reimplemented a function that converts
// non-negative numbers to strings. In this exercise, you're going to extend
// that function by adding the ability to represent negative numbers.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String(), Number.prototype.toString, or an expression
// such as '' + number. You may, however, use the integerToString function from
// the previous exercise.

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(int) {
  let str = '';

  do {
    str = NUMS[int % 10] + str;
    int = Math.floor(int / 10);
  } while (int > 0)

  return str;
}

// Examples:

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"

function signedIntegerToString(int) {
  if (1 / int === -Infinity) return '-0';
  let sign = '';
  if (int > 0) sign = '+';
  if (int < 0) sign = '-';

  return sign + integerToString(Math.abs(int));
}
