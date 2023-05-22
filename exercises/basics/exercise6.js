// In this exercise, you will write a program that asks the user for a phrase,
// then outputs the number of characters in that phrase. Go over the
// documentation for String to find an appropriate method to use.

// Examples:

// Please enter a phrase: walk
// console output
// There are 4 characters in "walk".

// Please enter a phrase: walk, don't run
// console output
// There are 15 characters in "walk, don't run".

const rlSync = require('readline-sync');

let phrase = rlSync.question('Please enter a phrase: ');
console.log(`There are ${phrase.length} characters in "${phrase}".`);

// Further Exploration
// The solution counts all the characters in the phrase, including spaces.
// Refactor it so that it ignores spaces.

let spaceless = phrase.replace(/ /g, '');
console.log(
  `There are ${spaceless.length} non-space characters in "${phrase}".`
);

// As an added challenge, further refactor the solution so that it only counts
// alphabetic characters.

let alphabetic = phrase.replace(/[^a-z]/gi, '');
console.log(
  `There are ${alphabetic.length} alphabetic characters in "${phrase}".`
);
