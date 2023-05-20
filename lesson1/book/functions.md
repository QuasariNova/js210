1. What does this code log to the console? Does executing the foo function affect the output? Why or why not?

```js
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
```

<br>
<br>
<br>

This will output `1`. The call to `foo` does not hcange the value of `bar` because it another `bar` variable is declared at the local level inside `foo` and shadows it. It does not reassign `bar` on line 3.

---
