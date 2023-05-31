// Write a function that takes a string consisting of one or more space
// separated words and returns an object that shows the number of words of
// different sizes.

// Words consist of any sequence of non-space characters.

// Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

function wordSizes(string) {
  let result = {};

  string.split(' ')
    .forEach(function (word) {
      const key = String(word.length);
      if (key === '0') return;

      result[key] = key in result ? result[key] + 1 : 1;
    });

  console.log(result);
}
