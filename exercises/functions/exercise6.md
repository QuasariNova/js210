What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);
```

<br>
<br>
<br>

This will output

```
7
```

This is because on line 1, we declare and initialize the variable `a` to the primitive value `7`. Since `a` is a primitive value, it can not be mutated.

On line 7, we call the `myValue` function, which is defined on lines 3 to 5. `myValue` does not reassign `a`, thus can't change `a`. When we log `a` on line 8 using `console.log`, we output `7`.
