What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
let a = 7;

function myValue(a) {
  a += 10;
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

On line 1, we declare the variable `a` and initialize it to the value `7`. `a` is globally scoped due to this declaration in the top level and is a primitive value, thus can't be mutated.

On line 7, we invoke the `myValue` function and pass `a` as an argument. `myValue` is defined on lines 3 to 5 and takes one parameter, `a`. This parameter `a` is locally scoped to the `myValue` function and shadows the global `a`. Due to this, any reassignment to `a` will apply to the local `a` and not the global `a` as they are two different variables, thus the global `a` can't be effected by the `myValue` function.

On line 8, we log the global `a`, which is `7`.
