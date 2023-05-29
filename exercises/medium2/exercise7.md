Read through the code below and determine what will be logged. You may refer to the ASCII Table to look up character code values.

```js
function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);
```

<br>
<br>
<br>

```
Welcome
to
the
Matrix!
```

When we call `one` on the last line, it will call `anotherAnotherOne`. `anotherAnotherOne` logs `Welcome`, then calls `anotherOne` passing `116` and `111` as arguments. `anotherOne` with those arguments will log `to`.

We then call `anotherOne` passing `116`, `104`, and `101` as arguments. This will output the. Finally, `one` will return the reference to the funtion `anotherOne`.

We promptly call that reference to `anotherOne` and pass it a number of arguments. This time it logs `Matrix!`.
