What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();
```

<br>
<br>
<br>

This will output:

```
This is global
```

On line 1, we declare the variable `myVar` and assign it to the string `'This is global'`. `myVar` is declared on the top level, thus it is globally scoped.

On line 7, we invoke the `someFunction` function, which is defined on lines 3 to 5. On line 4, we invoke the `console.log` method passing `myVar` as an argument. Since `myVar` does not exist in the `someFunction` function's scope, it checks outside it's scope and finds the global `myVar`. This causes it to output `This is global`.
