What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
logValue();

function logValue() {
  console.log('Hello, world!');
}
```

<br>
<br>
<br>

This will output:

```
Hello, world!
```

This happens due to "hoisting". When Javascript executes a script, before any execution happens it makes note of any declarations and in effect moves them to the beginning of their scope. With function declaration, that means that you can call a function prior to declaring it.

---

Further Exploration

Let's refactor the code a bit. What does it log now? What is the hoisted equivalent of this code?

```js
var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);
```

<br>
<br>
<br>

This will output:
```
string
```

The hoisted script would look like this:

```js
function logValue() {
  console.log('Hello, world!');
}

logValue = 'foo';

console.log(typeof logValue);
```

This is because functions are hoisted first, prior to variables. Variables declared with `var` will ignore the declaration if it has already been declared, thus no error. This code will reassign `logValue` to `'foo'` instead of the function, thus it outputs its type `string`.
