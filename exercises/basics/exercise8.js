// The previous exercise mimics the parseInt function to a lesser extent. In
// this exercise, you're going to extend that function to work with signed
// numbers.

// Write a function that takes a string of digits and returns the appropriate
// number as an integer. The string may have a leading + or - sign; if the
// first character is a +, your function should return a positive number; if it
// is a -, your function should return a negative number. If there is no sign,
// return a positive number.

// You may assume the string will always contain a valid number.

// Examples:

const DIGITS = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100

function stringToSignedInteger(str) {
  let sign = str.match(/^[+\-]/);
  if (sign) str = str.slice(1);

  let power = str.length - 1;
  let value = 0;

  for (let char in str) value += DIGITS[char] * Math.pow(10, power--);

  if (sign && sign[0] === '-') value *= -1;

  return value;
}
