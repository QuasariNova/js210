Read through the code below. What values will be logged to the console? Can you explain these results?

```js
const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
console.log(languages.length);
```

This will log:
```
['JavaScript', 'Ruby', 'Python']
3
```

This is because the `length` property is 1 more than the highest non negative index for the array, which in this case is `2`.

---

```js
languages.length = 4;
console.log(languages);
console.log(languages.length);
```

This will log

```
['JavaScript', 'Ruby', 'Python', <1 empty item>]
4
```

When you manually increase the `length` property of an array, it will add and count the elements it doesn't yet have, but leave them empty.

---

```js
languages.length = 1;
console.log(languages);
console.log(languages.length);
```

This will log:

```
['JavaScript']
1
```

When you manually decrease the `length` property of an array, it will truncate the array to the lower value losing any data that was stored in elements lost.

---

```js
languages.length = 3;
console.log(languages);
console.log(languages.length);
```

This will log:

```
['JavaScript', and <2 empty items>]
3
```

You don't get back lost data from the truncatation when you bring it back up.

---

```js
languages.length = 1;
languages[2] = 'Python';
console.log(languages);
console.log(languages[1]);
console.log(languages.length);
```

This will log:

```
['JavaScript', <1 empty item>, 'Python']
undefined
3
```

`length` is 1 more than the highest index, while empty elements return `undefined` when attempted to be fetched.
