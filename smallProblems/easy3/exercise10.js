// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size. For instance, the word size of
// "it's" is 3, not 4.

// Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}

function wordSizes(string) {
  let result = {};

  string.split(' ')
    .forEach(function (word) {
      const key = String(word.replace(/[^a-z]/gi, '').length);
      if (key === '0') return;

      result[key] = key in result ? result[key] + 1 : 1;
    });

  console.log(result);
}
