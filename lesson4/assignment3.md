1. Write a function named `push` that accepts two arguments: an Array and any other value. The function should append the second argument to the end of the Array, and return the new length of the Array.

```js
function push(arr, ele) {
  arr[arr.length] = ele;
  return arr.length;
}
```

---

2. Write a function named `pop` that accepts one argument: an Array. The function should remove the last element from the array and return it.

<br>
<br>
<br>

```js
function pop(arr) {
  let idx = arr.length - 1;
  if (idx < 0) return undefined;

  let out = arr[idx];
  arr.length = idx;
  return out;
}
```

---

3. Write a function named `unshift` that accepts two arguments: an Array and a value. The function should insert the value at the beginning of the Array, and return the new `length` of the array. You will need a `for` loop for this problem.

<br>
<br>
<br>

```js
function unshift(arr, ele) {
  for (let i = arr.length; i > 0; --i) arr[i] = arr[i - 1];

  arr[0] = ele;
  return arr.length;
}
```

---

4. Write a function named `shift` that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

<br>
<br>
<br>

```js
function shift(arr) {
  if (arr.length === 0) return undefined;

  let out = arr[0];
  for (let i = 0; i < arr.length - 1; ++i) arr[i] = arr[i + 1];

  arr.length = arr.length - 1;
  return out
}
```
