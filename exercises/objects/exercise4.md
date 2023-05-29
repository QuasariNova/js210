What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);
```

<br>
<br>
<br>

This should output:

```
678
456
```

This is because `myObject[prop2]` takes the value referenced by `prop2`, `'456'` and uses that as the property key to stroe the value `'678'`, while the key `'prop2'` is different from the variable `prop2`. You can't use variables with `.` notation.
