1. Write a function that creates and returns a new array from its array argument. The new array should contain all values from the argument array whose positions have an odd index.

<br>
<br>
<br>

```js
function oddElementOf(arr) {
  let oddElements = [];

  for (let i = 1; i < arr.length; i += 2) oddElements.push(arr[i]);

  return oddElements;
}
```

---

2. Write a function that takes an array argument and returns a new array that contains all the argument's elements in their original order followed by all the argument's elements in reverse order.

<br>
<br>
<br>

```js
function forwardsBackwards(arr) {
  let out = [];

  for (let i = arr.length - 1; i >= 0; --i) {
    out.unshift(arr[i]);
    out.push(arr[i]);
  }

  return out;
}
```

---

3. Use the array sort method to create a function that takes an array of numbers and returns a new array of the numbers sorted in descending order. Do not alter the original array.

<br>
<br>
<br>

```js
function sortDescending(arr) {
  let copy = arr.slice();
  return copy.sort((a, b) => b - a);
}
```

---

4. Write a function that takes an array of arrays as an argument, and returns a new array that contains the sums of each of the sub-arrays.

<br>
<br>
<br>

```js
function matrixSums(arr) {
  return arr.map(function (subArr) {
    return subArr.reduce((sum, ele) => sum + ele, 0);
  });
}
```

---

5. Write a function that takes an array, and returns a new array with duplicate elements removed.

```js
function uniqueElements(arr) {
  let out = []

  for (let ele of arr) {
    if (out.includes(ele)) continue;
    out.push(ele);
  }

  return out;
}
```
