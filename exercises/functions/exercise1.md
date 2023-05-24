What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);
```

<br>
<br>
<br>

This will output:

```
This is global
```

This is due to scoping rules in Javascript. On line 1, we declare the variable `myVar` and assign it the string `'This is global'`. This `myVar` is in the global scope due to this being the top level.

On line 7, we invoke the `someFunction` function, which is defined on lines 3 to 5. On line 4, we declare and initialize the variable `myVar` to the string `'This is local'`. This `myVar` is locally scoped to the `someFunction` function and shadows the global `myVar`, thus it does nothing to change the global `myVar`'s assignment.

On line 8, we use `console.log` to output `myVar`, which since this is the top level and not inside the `someFunction` function, it will find the global `myVar` and output its value `This is global`.
