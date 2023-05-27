1. Write a function `indexOf` that accepts two arguments: an array and a value. The function returns the first index at which the value can be found, or `-1` if the value is not present.

<br>
<br>
<br>

```js
function indexOf(arr, ele) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === ele) return i;
  }

  return -1;
}
```

---

2. Write a function `lastIndexOf` that accepts two arguments: an array and a value. The function returns the last index at which the value can be found in the array, or `-1` if the value is not present.

<br>
<br>
<br>

```js
function lastIndexOf(arr, ele) {
  for (let i = arr.length - 1; i >= 0; --i) {
    if (arr[i] === ele) return i;
  }

  return -1;
}
```
