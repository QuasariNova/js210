*You may use functions that were answers to previous practice problems to complete these problems, but do not use any built-in Array methods.*

1. Write a function named `slice` that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. Do not modify the original Array.

<br>
<br>
<br>

```js
function slice(arr, start, end) {
  let out = [];
  for (let i = start; i < end; ++i) out[i - start] = arr[i];

  return out;
}
```

---

2. Write a function named `splice` that accepts three arguments: an Array, a start index, and the number of values to remove. The function should remove values from the original Array, starting with the start index and removing the specified number of values. The function should return the removed values in a new Array.

<br>
<br>
<br>

```js
function splice(arr, start, count) {
  let out = [];

  for (let i = 0; i < array.length - start; ++i) {
    let current = i + start;
    if (i < count) out[i] = arr[current];

    arr[current] = arr[current + count]
  }

  arr.length = arr.length - count;

  return out;
}
```

---

3. Write a function named `concat` that accepts two Array arguments. The function should return a new Array that contains the values from each of the original Arrays.

<br>
<br>
<br>

```js
function concat(arr1, arr2) {
  let out = [];

  for (let ele of arr1) push(out, ele);

  for (let ele of arr2) push(out, ele);

  return out;
}
```

---

4. Write a function named `join` that accepts two arguments: an Array and a String. The function should coerce each value in the Array to a String, and then join those values together using the second argument as a separator. You may assume that a separator will always be passed.

<br>
<br>
<br>

```js
function join(arr, sep) {
  if (arr.length === 0) return ''
  let out = '' + arr[0];

  for (let i = 1; i < arr.length; ++i) out += sep + arr[i];

  return out;
}
```
