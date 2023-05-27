In the previous exercise, the value of the reference gets copied. For this exercise, only the values of the array should be copied, but not the reference. Implement two alternative ways of doing this.

<br>
<br>
<br>

```js
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray); // [1, 2, 3 ,4]

myArray = [1, 2];
console.log(myOtherArray); // [1, 2, 3 ,4]
```

```js
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.map((ele) => ele);

myArray.pop();
console.log(myOtherArray); // [1, 2, 3 ,4]

myArray = [1, 2];
console.log(myOtherArray); // [1, 2, 3 ,4]
```
