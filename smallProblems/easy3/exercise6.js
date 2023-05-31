// Write a function that returns true if its integer argument is palindromic,
// or false otherwise. A palindromic number reads the same forwards and
// backwards.

// Examples:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

function isPalindrome(str) {
  const reversed = [...str].reverse().join('');
  return str === reversed;
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

// Suppose the number argument begins with one or more 0s. Will the solution
// still work? Why or why not? Is there any way to address this?

// This would not work. JavaScript will truncate the excess 0s. If you want
// to infer that there could be an equal number of 0's on the left as the right
// you could remove the rightmost 0s before checking if its a palindrome:

/*
function isPalindromicNumber(number) {
  number = String(number).replace(/0+$/, '');
  return isPalindrome(number);
}
*/
