// Go over the following program. What does it log to the console at lines 7,
// 11, 15, and 19? Is it what you expected? Why or why not?

const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}
// Outputs: Hello
// myBoolean is true.

if (!myString) {
  console.log('World');
}
// No Output
// myString is not an empty string, thus is truthy. Using ! changes it to false.

if (!!myArray) {
  console.log('World');
}
// Outputs: World
// myArray is an object(array), thus truthy. Using ! twice just changes it into
// true

if (myOtherString || myArray) {
  console.log('!');
}

// Outputs: !
// myOtherString is an empty string, which is falsy, but myArray is an object
// and all objects are truthy.
