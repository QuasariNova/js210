What does the following code log? Why is this so?

```js
let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
```

<br>
<br>
<br>

Because `startingBalance` is declared in the global scope, it is accessible by `totalPayable`. This is due to how functions create a closure retaining access to an enclosing scope. Since the global scope encloses `totalPayable`, its variables are accessible. It does not retain the value of the variables, but references to the variables themselves.

So we log `40` on line 10 and `45` on line 13.
