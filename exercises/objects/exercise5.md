What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);
console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);
```

<br>
<br>
<br>

```
Line 3: a
Line 4: undefined
Line 10: d
Line 11: 5
Line 12: ['a', 'b', 'c', 'f', '-1': 'd', e: 5]
```

This is because `myArray` is an array and is also considered an object. Array elements are any property that is a non-negative integer, but it can have properties assigned to it like an object as well.
