1. What values do the following expressions evaluate to?

```js
false || (true && false);
// false

true || (1 + 2);
// true

(1 + 2) || true;
// 3

true && (1 + 2);
// 3

false && (1 + 2);
// false

(1 + 2) && true;
// true

(32 * 4) >= 129;
// false

false !== !true;
// false

true === 4;
// false

false === (847 === '847');
// true

false === (847 == '847');
// false

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;\
// true
```

---

2. Write a function, `evenOrOdd`, that determines whether its argument is an even number. If it is, the function should log `'even'` to the console; otherwise, it should log `'odd'`. For now, assume that the argument is always an integer.

<br>
<br>
<br>

```js
function evenOrOdd(num) {
  if (num % 2 === 0)
    console.log('even');
  else
    console.log('odd');
}
```

---

3. Let's improve our previous implementation of `evenOrOdd`. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

<br>
<br>
<br>

```js
function evenOrOdd(num) {
  if (!Number.isInteger(num))
    return console.log('Argument is not an integer');
  if (num % 2 === 0)
    console.log('even');
  else
    console.log('odd');
}
```

---

4. What does the following code log to the console, and why?

```js
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
```

<br>
<br>
<br>

```
Product2
Product3
Product not found!
```

`break` was not used for each individual case, so fall-through happens and each `case` after `case '113'` gets executed.

---

5. Refactor this statement to use an if statement instead.

```js
return foo() ? 'bar' : qux();
```

<br>
<br>
<br>

```js
if (foo())
  'bar';
else
  qux();
```

---

6. What does this code output to the console?

```js
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
```

<br>
<br>
<br>

`Not Empty`, because an array regardless of if it has elements or not is truthy.

---

7. Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change `'hello world'` to `'HELLO WORLD'`, but don't change `'goodbye'`.

<br>
<br>
<br>

```js
function biggify(string) {
  if (string.length > 10)
    return string.toUpperCase();
  else
    return string;
}
```

---

8. Write a function that logs whether an integer is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

```js
numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
```

Expected Output

```
25 is between 0 and 50
75 is between 51 and 100
125 is greater than 100
-25 is less than 0
```

<br>
<br>
<br>

```js
function numberRange(number) {
  if (number > 100)
    console.log(`${number} is greater than 100`);
  else if (number > 50)
    console.log(`${number} is between 51 and 100`);
  else if (number >= 0)
    console.log(`${number} is between 0 and 50`);
  else
    console.log(`${number} is less than 0`);
}
```

---

9. Without running this code, what will it print?

```js
console.log(false ?? null);
// false

console.log(true ?? (1 + 2));
// true

console.log((1 + 2) ?? true);
// 3

console.log(null ?? false);
// false

console.log(undefined ?? (1 + 2));
// 3

console.log((1 + 2) ?? null);
// 3

console.log(null ?? undefined);
// undefined

console.log(undefined ?? null);
// null
```

---

10. Without running this code, what will it print?

```js
function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7);
show(0, 0);
show(4);
show();
```

<br>
<br>
<br>

```
foo is 5, bar is 7
foo is 0, bar is 0
foo is 4, bar is 42
foo is 3, bar is 42
```
