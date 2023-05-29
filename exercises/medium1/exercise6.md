Read through the following code. Why will it log 'debugging'?

```js
function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();
```

<br>
<br>
<br>

Yes, because `status` is declared in the `debugIt` function's local scope, which is above the `logger` functions scope. This means it is accessible by the `logger` method.
