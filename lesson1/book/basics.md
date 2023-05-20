1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put `'John'` and `'Doe'` together to get `'John Doe'`.

    ```js
    'Christopher ' + 'Perkins'
    ```

---

2. Using arithmetic operators, get the individual digits of a 4-digit number like `4936`:

    1. thousands place is 4
    2. hundreds place is 9
    3. tens place is 3
    4. ones place is 6

        ```js
        let number = 4936
        let ones = number % 10
        number = (number - ones) / 10
        let tens = number % 10
        number = (number - tens) / 10
        let hundreds = number % 10
        let thousands = (number - hundreds) / 10
        ```

---

3. Identify the data type for each of the following values:

    - 'true'
        - String
    - false
        - Boolean
    - 1.5
        - Number
    - 2
        - Number
    - undefined
        - Undefined
    - { foo: 'bar' }
        - Object

---

4. Explain why this code logs '510' instead of 15.

```js
console.log('5' + 10);
```

<br>
<br>
<br>

This happens because the `+` operator with a string will coerce the other operand into a string and perform concatenation.

---

5. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

    ```js
    console.log(Number('5') + 10);
    ```

---

6. Use the template literal syntax along with the expression `Number('5') + 10` to log the following sentence to the console:

```
The value of 5 + 10 is 15.
```

<br>
<br>
<br>

```js
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);
```

---

7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

```js
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
```

<br>
<br>
<br>

No, this will not produce an error. instead, the value would be `undefined` and output would be `undefined`.

---

8. Create an array named `names` that contains a list of pet names. For instance:

| Name |
|:---:|
| asta |
| butterscotch |
| pudding |
| neptune |
| darwin |

You can use that data or make up your own.

<br>
<br>
<br>

```js
let names = [
  'asta',
  'butterscotch',
  'pudding',
  'neptune',
  'darwin',
];
```

---

9. Create an object named `pets` that contains a list of pet names and the type of animal. For instance:

| Name | Animal |
|:---:|:---:|
| asta | dog |
| butterscotch | cat |
| pudding | cat |
| neptune | fish |
| darwin | lizard |

You can use that data or make up your own.

<br>
<br>
<br>

```js
let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
};
```

---

10. What value does the following expression evaluate to?

```js
'foo' === 'Foo'
```

<br>
<br>
<br>

`false`

---

11. What value does the following expression evaluate to?

```js
parseInt('3.1415')
```

<br>
<br>
<br>

`3`

---

12. What value does the following expression evaluate to?

```js
'12' < '9'
```

<br>
<br>
<br>

`true`
