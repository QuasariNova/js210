The productOfSums function shown below is expected to return the product of the sums of two arrays of numbers. Read through the following code. Will it produce the expected result? Why or why not?

```js
function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}
```

<br>
<br>
<br>

This will always return `NaN`. This is because when we declare the `sum` local variable inside `total`, we do not assign it a value. This means it will be set to `undefined`. Due to this, when we try to use `+=` on it later, it will become `NaN`. To fix this we just need to initialize `sum` to `0`.

There is another issue, `total` does not explicitly return anything, thus will implicitly return `undefined`. This will still cause `productOfSums` to evaluate to `NaN`.

```js
function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}
```
