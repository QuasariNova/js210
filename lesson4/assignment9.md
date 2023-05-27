In the problems below, we ask you to write functions that work with Arrays. You may use Array's index access (`[]`), the `length` property, and any Array Methods you need.

1. Write a function that returns the first element of an array passed in as an argument.

<br>
<br>
<br>

```js
function firstElementOf(arr) {
  return arr[0];
}
```

---

2. Write a function that returns the last element of an array passed in as an argument.

<br>
<br>
<br>

```js
function lastElementOf(arr) {
  return arr[arr.length - 1];
}
```

---

3. Write a function that accepts two arguments, an array and an integer index position, and returns the element at the given index. What happens if the index is greater than the length of the array? What happens if it is a negative integer?

<br>
<br>
<br>

If the index is not in range, it should return `undefined`.

```js
function nthElementOf(arr, index) {
  return arr[index];
}
```

---

4. Can we insert data into an array at a negative index? If so, why is this possible?

<br>
<br>
<br>

Yes, this is because arrays are objects. However, it isn't an array element, just an object property.

---

5. Write a function that accepts an array as the first argument and an integer value, `count`, as the second. It should return a new array that contains the first `count` elements of the array.

<br>
<br>
<br>

```js
function firstNOf(arr, count) {
  return arr.slice(0, count);
}
```

---

6. Write a function like the previous one, except this time return the last `count` elements as a new array.

<br>
<br>
<br>

```js
function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}
```

---

7. Using the function from the previous problem, What happens if you pass a `count` greater than the length of the array? How can you fix the function so it returns a new instance of the entire array when `count` is greater than the array length?

<br>
<br>
<br>

Slice interprets negative numbers as from the end of the array, thus when we have a count > than the length, we would have a negative number index to slice from. To fix this we need to add a guard clause for `count` greater than the length.

```js
function lastNOf(arr, count) {
  return arr.slice(count > arr.length ? 0 : arr.length - count);
}
```

---

8. Write a function that accepts two arrays as arguments and returns an array with the first element from the first array and the last element from the second array.

<br>
<br>
<br>

```js
function endsOf(beginingArr, endingArr) {
  return [beginingArr[0], endingArr[endingArr.length - 1]];
}
```
