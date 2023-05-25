// To convert a single uppercase character to a lowercase character, get its
// ASCII numeric representation from the ASCII table, add 32 to that number,
// then convert the number back to a character using the same ASCII table. You
// can use the String.fromCharCode and the String.charCodeAt methods for these
// operations. For example:

// let string = 'A';
// let asciiNumeric = string.charCodeAt(0);         // 65
// asciiNumeric += 32;
// string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

// Examples

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"

// You may use the square brackets ([]) to access a character by index (as
// shown below), and the length property to find the string length. However,
// you may not use any other properties or methods from JavaScript's built-in
// String class.


function toLowerCase(string) {
  const LOWERCASE_OFFSET = 32;

  out = '';

  for(let i = 0; i < string.length; ++i) {
    if (string[i] >= 'A' && string[i] <= 'Z') {
      let code = string.charCodeAt(i);
      out += String.fromCharCode(code + LOWERCASE_OFFSET);
    } else {
      out += string[i];
    }
  }

  return out;
}
