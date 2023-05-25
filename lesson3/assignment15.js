// Write a function that takes a string as an argument, and returns the string
// stripped of spaces from both ends. Do not remove or alter internal spaces.

// Example

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

// You may use the square brackets ([]) to access a character by index (as
// shown below), and the length property to find the string length. However,
// you may not use any other properties or methods from JavaScript's built-in
// String class.

function trim(string) {
  let firstIndex = 0;
  for(; firstIndex < string.length; ++firstIndex) {
    if (string[firstIndex] !== ' ') break;
  }

  let lastIndex = string.length - 1;
  for (; lastIndex >= 0; --lastIndex) {
    if (string[lastIndex] !== ' ') break;
  }

  if (lastIndex < firstIndex || (!lastIndex && !firstIndex)) return '';
  let output = '';

  for(let i = firstIndex; i <= lastIndex; ++i) {
    output += string[i];
  }

  return output;
}
