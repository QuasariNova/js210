// Write a function that takes a string, doubles every character in the string,
// and returns the result as a new string.

// Examples:

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

function repeater(string) {
  let result = '';

  for (const char of string) {
    result += char + char;
  }

  return result;
}
