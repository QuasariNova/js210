A user wrote a function that takes an array as an argument and returns its average. Given the code below, the user expects the average function to return 5. Is the user's expectation correct? Why or why not?

```js
const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);
```

<br>
<br>
<br>

Since negative integers would be properties and not elements, the `myArray` array would not show this in its `length` property. `myArray` would have a `length` property of `2`, not `4`, so this `average` function would return `10`.
