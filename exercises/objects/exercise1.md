Identify the bug in the following code. Don't run the code until after you've tried to answer.

```js
const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;
```

<br>
<br>
<br>

`myObject[a]` will produce throw a `ReferenceError`. You should pass a string literal or an expression that will coerce to a string, instead we try to access an undeclared variable.
