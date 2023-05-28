// For this exercise we're going to learn more about type conversion by
// implementing our own parseInt function that converts a string of numeric
// characters (including an optional plus or minus sign) to a number.

// The function takes a string of digits as an argument, and returns the
// appropriate number. Do not use any of the built-in functions for converting
// a string to a number type.

// For now, do not worry about leading + or - signs, nor should you worry about
// invalid characters; assume all characters will be numeric.

// Examples:

const DIGITS = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

stringToInteger('4321');      // 4321
stringToInteger('570');       // 570

function stringToInteger(string) {
  let charArr = [...string];
  let value = 0;
  let power = 0;

  while (charArr.length) {
    value += DIGITS[charArr.pop()] * Math.pow(10, power);
    power += 1;
  }

  return value;
}
