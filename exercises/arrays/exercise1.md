```js
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);
```

Read through the code shown above. What does it log to the console at lines 7 and 11?

This will log `[1, 2, 3]` on line 7 and `[1, 2, 3]` on line 11.

This is because while `myOtherArray` is a constant, it references the array initialized to `myArray` on line 1. So when we mutate that array on line 5, `myOtherArray` shows the change since it is the same array.

On line 9, when we reassign `myArray` to a new array, this does not effect `myOtherArray` as reassignment does not mutate the object previously referenced by a variable.
