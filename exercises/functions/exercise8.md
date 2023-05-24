What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);
```

<br>
<br>
<br>

This outputs:

```
[1, 2, 10]
```

On line 1, we declare variable `a` and initialize it to the array `[1, 2, 3]`. Since this is an array, it is on object, thus a reference type and mutable.

On line 7, we invoke the `myValue` function and pass the reference to the array held by `a` as an argument. `myValue` is defined on lines 3 to 5 and takes one parameter `b`. Now, both `b` and `a` point to the same array object.

On line 4, we use `+=` as shorthand for `b[2] = b[2] + 7`. This reassigns the element at index `2` of the array to itself added to `7`. Reassigning elements mutates the object, thus both `b` and `a` will reflect the change, with their value becoming `[1, 2, 10]`.

On line 8, we log the value referenced by `a`, so we output `[1, 2, 10]`
