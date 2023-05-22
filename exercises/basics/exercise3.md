One of the ways to manage the flow of a program is through the use of conditionals. Go over the code below and specify how many unique execution paths are possible.

```js
if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}
```

1. `condition1 === true` and `condition2 === true`
2. `condition1 === true` and `condition2 === false`
3. `condition1 === false`
4. `condition1 === false` and `condition4 === true`
5. `condition1 === false` and `condition4 === true` and `condition5 === true`
