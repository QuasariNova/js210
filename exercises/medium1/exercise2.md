The following program is expected to log each number between 0 and 9 (inclusive) that is a multiple of 3. Read through the code shown below. Will it produce the expected result? Why or why not?

```js
let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}
```

<br>
<br>
<br>

No, this will not work as intended. This is because `i` will only increment when `i` is not divisible by `3`, which will never happen as `i` is initialized as `0`. It will infinitely log `0` instead.
