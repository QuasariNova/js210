// Implement a function that takes a String as an argument and returns an
// object that contains a count of the repeated characters.

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }

// Note that repeatedCharacters does a bit more than simply count the frequency
// of each character: it determines the counts, but only returns counts for
// characters that have a count of 2 or more. It also ignores the case.

function characterCount(string) {
  const characters = {};

  for (let i = 0; i < string.length; ++i) {
    const char = string[i];
    if (!characters[char]) characters[char] = 0;

    characters[char] += 1;
  }

  return characters;
}

function repeatedCharacters(string) {
  const repeated = characterCount(string.toLowerCase());

  for(let char in repeated) {
    if (repeated[char] < 2) delete repeated[char]
  }

  return repeated;
}
