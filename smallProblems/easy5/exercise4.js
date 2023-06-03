// Write a function that takes a non-empty string argument and returns the
// middle character(s) of the string. If the string has an odd length, you
// should return exactly one character. If the string has an even length, you
// should return exactly two characters.

// Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

function centerOf(str) {
  const numOfChars = 2 - (str.length % 2);
  const firstChar = Math.floor((str.length - 1) / 2);

  return str.slice(firstChar, firstChar + numOfChars);
}
