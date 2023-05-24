What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
console.log(a);

var a = 1;
```

<br>
<br>
<br>

This will output:

```
undefined
```

This is because of "hoisting". Since `a` is declared on line 3 with `var` it is found during the creation phase of Javascript and initialized to `undefined` prior to code running. It will hold the `undefined` value until line 3, where it will be assigned the value `1`. Because it is logged on line 1, it will output `undefined`.
