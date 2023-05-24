What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();
```

<br>
<br>
<br>

This code outputs:

```
This is local
```

On line 1, we declare the variable `myVar` in the global scope and intialize it to the string `'This is global'`.

On line 8, we invoke the `someFunction` function, which is defined on lines 3 to 6. On line 4, we declare the variable `myVar` and initialize it to the string `'This is local'`. This `myVar` is scoped at the local level to the function `someFunction` and shadows the global `myVar`. On line 5, we invoke `console.log` and pass it `myVar`. Since `myVar` is shadowing the global `myVar`, the local `myVar` is found and the `log` function outputs `This is local`.
