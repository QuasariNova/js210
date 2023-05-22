const myName = 'Bob';
const saveName = myName;
myName.toUpperCase();
console.log(myName, saveName);

// What does this code log? Can you explain these results?

// It outputs: Bob Bob
// Strings are immutable, thus their value can't be changed.
