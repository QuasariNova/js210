What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);
```

<br>
<br>
<br>

This will output

```
This is global
```

On line 5, we invoke the `someFunction` function, which is defined on lines 1 to 3. On line 2, we assign `myVar` to the value `'This is global'`. Since we are assigning a variable without it being declared, it is initialized inside the global scope, so `myVar` will be accessible outside `someFunction`.

On line 6, we invoke the `console.log` method and pass `myVar` to it. Since `myVar` was initialized in the global scope, it finds it and outputs `This is global`.
