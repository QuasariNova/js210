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
