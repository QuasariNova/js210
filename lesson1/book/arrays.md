`. In the following code, what are the final `length` values for `array1`, `array2`, `array3`, `array4`, and `array5`?

```js
let array1 = [1, 2, undefined, 4];

// array1.length === 4

let array2 = [1];
array2.length = 5;

// array2.length === 5

let array3 = [];
array3[-1] = [1];

// array3.length === 0...weird

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

// array4.length === 3 ... [1, 2, 3]

let array5 = [];
array5[100] = 3;

// array5.length === 101
```

---

2. Log all of the even values from myArray to the console.

```js
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
```

Expected Output

```
6
4
2
4
16
0
```

<br>
<br>
<br>

```js
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
myArray.forEach(function(value) {
  if (value % 2 === 0)
    console.log(value);
});
```

---

3. Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

```js
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
```

<br>
<br>
<br>

```js
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(subArray) {
  subArray.forEach(function(value) {
    if (value % 2 === 0)
      console.log(value);
  });
});
```

---

4. Let's try another variation on the even-numbers theme.

We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

Example

```js
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
```

Expected Output

```js
[
  'odd', 'odd', 'even', 'odd',
  'even', 'even', 'even', 'odd',
  'odd', 'even', 'even',
]
```

If you have trouble using map to accomplish this, try it using a regular for loop instead.

<br>
<br>
<br>

```js
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = myArray.map(function(value) {
  return value % 2 === 0 ? 'even' : 'odd';
});
```

---

5. Write a `findIntegers` function that takes an array argument and returns an array that contains only the integers from the input array. Use the `filter` method in your function.

Example

```js
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
```

<br>
<br>
<br>

```js
function findIntegers(array) {
  return array.filter((value) => Number.isInteger(value));
}
```

---

6. Use `map` and `filter` to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

```js
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
```

<br>
<br>
<br>

```js
function oddLengths(array) {
  let lengths = array.map((str) => str.length);
  return lengths.filter((length) => length % 2 !== 0);
}
```
----

7. Use `reduce` to compute the sum of the squares of all of the numbers in an array:

```js
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
```

Note that `83` is `3*3 + 5*5 + 7*7`.

<br>
<br>
<br>

```js
function sumOfSquares(array) {
  return array.reduce((acc, value) => {
    return acc + value * value
  }, 0);
}
```

---

8. Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

```js
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
```

<br>
<br>
<br>

```js
function oddLengths(array) {
  return array.reduce(function(acc, str) {
      let length = str.length;
      if (length % 2 !== 0)
        return acc.concat(length);
      else
        return acc;
    }, []);
}
```

---

9. Without using a `for`, `while`, or `do/while` loop, write some code that checks whether the number 3 appears inside these arrays:

```js
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
```

Return `true` or `false` depending on each result.

<br>
<br>
<br>

```js
numbers1.includes(3); // true
numbers2.includes(3); // false
numbers3.includes(3); // false
```

---

10. Write some code to replace the value `6` in the following array with `606`:

```js
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
```

You don't have to search the array. Just write an assignment that replaces the `6`.

```js
arr[1][3] = 606;
```
