1. What does this code log to the console? Why?

```js
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);
```

<br>
<br>
<br>

This code will log `[1, 4, 3]`. Since an array is an object, it is pointed to by a variable. This means that when we assign `array1` to `array2` on line 5, they both point to the same array. When we assign `4` to index `1` of `array1`, `array2` also shows that change because they point to the same array.

---

2. What do the following error message and stack trace tell you?

```
$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)
```

<br>
<br>
<br>

It tells you that the variable `greeting` was never defined inside the `hello` function in the `exercise2.js` file.

---

3. Write some code to output the square root of 37.

<br>
<br>
<br>

```js
console.log(Math.sqrt(37));
```

---

4. Given a list of numbers, write some code to find and display the largest numeric value in the list.

| List | Max |
|:---:|:---:|
| 1, 6, 3, 2 | 6 |
| -1, -6, -3, -2 | -1 |
| 2, 2 | 2 |

<br>
<br>
<br>

```js
console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));
```

---

5. What does the following function do?

```js
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
```

<br>
<br>
<br>

- Takes a string and splits it into an array of substrings that were separated by spaces
- Reverses the order of those substrings
- Then transforms the array of substrings into a new array of the substring lengths.

---

6. Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.

Example

```js
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
```

<br>
<br>
<br>

```js
function allMatches(words, regex) {
  return words.filter((word) => regex.test(word));
}
```

---

7. What is exception handling and what problem does it solve?

<br>
<br>
<br>

Exception handling is a nice way of handling errors that pop up in code in a managable and predictable manner. It allows programmers to deal with problems in a way that makes sense and possibly prevent failure or bugs.

---

8. Earlier, we learned that `Number.isNaN(value)` returns `true` if value is the `NaN` value, `false` otherwise. You can also use `Object.is(value, NaN)` to make the same determination.

Without using either of those methods, write a function named `isNotANumber` that returns `true` if the value passed to it as an argument is NaN, `false` if it is not.

<br>
<br>
<br>

```js
function isNotANumber(value) {
  // return String(value) === 'NaN'; // This wont work for string 'NaN'
  return value !== value // NaN is only value not equal to itself
}
```

---

9. arlier, we learned that JavaScript has multiple versions of the numeric value zero. In particular, it has `0` and `-0`. While it's mathematically nonsensical to distinguish between `0` and `-0`, they are distinct values in JavaScript. We won't get into why JavaScript has a `0` and `-0`, but it can be useful in some cases.

There's a problem, however: JavaScript itself doesn't seem to realize that the values are distinct:

```js
> 0 === -0
= true

> String(-0)
= '0'
```

Fortunately, you can use `Object.is` to determine whether a value is -0:

```js
> let value = -0;
> Object.is(value, 0)
= false

> Object.is(value, -0)
= true
```

There are other ways to detect a `-0` value. Without using `Object.is`, write a function that will return `true `if the argument is `-0`, and `false` if it is `0` or any other number.

<br>
<br>
<br>

```js
function isNegativeZero(value) {
  return 1 / value === -Infinity;
}
```

---

10. Consider this code:

```js
> let x = "5"
> x = x + 1
= "51"
```

Now, consider this code:

```js
> let y = "5"
> y++
```

What gets returned by y++ in the second snippet, and why?

<br>
<br>
<br>

Numeric value `5`. I know it coerces the value to a number as `++` is a numeric operator. The post increment operator returns the number value prior to incrementing, so it returns 5 and y holds 6.
