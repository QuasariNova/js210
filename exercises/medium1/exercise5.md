What will the following code snippets log?
### Code Snippet 1

```js
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}
```

This will output `The total value is 15`. Functions get hoisted above variable definitions, `var` ignores if a variable with that name exists, and `counter` is reassigned with `5`.

---

### Code Snippet 2

```js
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;
```

This will output `The total value is NaN`. Functions get hoisted above variable definitions, `var` will initialize values with `undefined`, and `undefined` with a mathematical operator will result in `NaN`.

---

### Code Snippet 3

```js
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
```

This will output `The total value is 15`. Functions get hoisted above variable definitions, `var` ignores if a variable with that name exists, and `counter` is reassigned with `5`.

---

### Code Snippet 4

```js
let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
```

This will throw a `Syntax`. `let` doesn't allow duplicate variable names in the same scope.
