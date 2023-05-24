What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);
```

<br>
<br>
<br>

This code outputs:

```
This is local
```

On line 1, we declare the variable `myVar` in the global scope and intialize it to the string `'This is global'`.

On line 7, we invoke the `someFunction` function, which is defined on lines 3 to 5. On line 4, the global `myVar` is reassigned to `'This is local'`. This happens because we have not declared another `myVar` variable to shadow the global one and the function will find the global one when searching for it.

On line 8, we invoke `console.log` and pass `myVar` as an argument. Since `myVar` is currently set to `'This is local'`, it outputs `This is local`.
