What will the following program log to the console? Can you explain why?

```js
const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);
console.log(Object.keys(array).length);

array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);
```

<br>
<br>
<br>

This will output:

```
3
4
3
5
```

This is because an arrays `length` property is always 1 more than the highest indexed element. An element in a JavaScript array is any property that has a nonnegative integer index, so `3.4` and `-2` are just properties, not elements. Due to this, there are more keys to the object than there are elements in the array.
