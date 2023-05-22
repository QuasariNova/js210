1. The result of the following calculation is a string. Using type coercion, correct the calculation to produce the numeric result instead.

```js
let x = '13';
let y = 9;

console.log(x + y);
```

<br>
<br>
<br>

```js
console.log(parseInt(x, 10) + y);
```

---

2. Using the same block of JavaScript, change the addition operator to a multiplication operator and leave `x` as a string. Will the result be a string or a number?

<br>
<br>
<br>

It will be a number. `+` is the only mathematical operator that will coerce to a string for concatenation when a string is an operand.

---

3. Convert the three parts of this telephone number to strings to produce a valid phone number.

```js
let npa = 212;
let nxx = 555;
let num = 1212;

console.log(npa + nxx + num);
```

<br>
<br>
<br>

```js
console.log(npa.toString() + String(nxx) + num);
```

---

4. You can also use the `String` constructor to create Strings from numbers. This is a function that takes an argument and converts it to a string. Try it using the previous block of code; wrap each number in a call to `String`.

<br>
<br>
<br>

```js
console.log(String(npa) + String(nxx) + String(num));
```

---

5. The `toString` method is yet another way to convert values to strings. Try using `toString` to convert a boolean and an array to a String. Did you get the result you expected?

```js
let bool = true;
let arr = [1, 2, 3];
```

<br>
<br>
<br>

```js
console.log(bool.toString());
console.log(arr.toString());
```
