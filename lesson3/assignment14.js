// Write two functions that each take two strings as arguments. Their expected
// behaviors are as follows:

    // The indexOf function searches for the first instance of a substring in
    // firstString that matches the string secondString, and returns the index
    // of the character where that substring begins.

    // The lastIndexOf function searches for the last instance of a substring
    // in firstString that matches the string secondString, and returns the
    //  index of the character where that substring begins.

    // Both functions return -1 if firstString does not contain the substring
    // specified by secondString.

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

function indexOf(firstString, secondString) {
  for(let i = 0; i <= firstString.length - secondString.length; ++i) {
    let subString = firstString.slice(i, i + secondString.length);

    if (subString === secondString) {
      return i;
    }
  }

  return -1;
}

/*
// Original
function lastIndexOf(firstString, secondString) {
  for(let i = firstString.length - secondString.length; i >= 0; --i) {
    let subString = firstString.slice(i, i + secondString.length);

    if (subString === secondString) {
      return i;
    }
  }

  return -1;
}
*/

// If you haven't used it yet, implement the lastIndexOf function by reusing
// your indexOf function.

function lastIndexOf(firstString, secondString) {
  firstString = firstString.split('').reverse().join('');
  secondString = secondString.split('').reverse().join('');

  let index = indexOf(firstString, secondString);
  if (index === -1) return -1;

  return firstString.length - index - secondString.length;
}
