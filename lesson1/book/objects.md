1. Given the following code, how can you access the name of the person?

```js
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};
```

<br>
<br>
<br>

`person.name` or `person['name']`

---

2. Which of the following values are valid keys for an object?

- 1
- '1'
- undefined
- 'hello world'
- true
- 'true'

<br>
<br>
<br>

All of them are valid keys.

---

3. Use object literal syntax (e.g., `{ key: value, ... }` notation) to create an object that behaves as an array in a `for` statement. The object should contain at least 3 elements. You should place your code between the braces in the `let` statement:

```js
let myArray = {
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
```


<br>
<br>
<br>

```js
let myArray = {
  0: 'Hi',
  1: 'Hello',
  2: 'World',
  length: 3,
};
```

---

4. Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

```js
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
```

<br>
<br>
<br>

```js
let out = [];

for(let key in obj) {
  out.push(key.toUpperCase());
}

console.log(out);
```

---

5. Create a new object named `myObj` that uses `myProtoObj` as its prototype.

```js
let myProtoObj = {
  foo: 1,
  bar: 2,
};
```

<br>
<br>
<br>

```js
let myObj = Object.create(myProtoObj);
```

---

6. Which of the following values are primitive values? Which are objects? Which are neither?

- "foo"
    - Primitive
- 3.1415
    - Primitive
- [ 'a', 'b', 'c' ]
    - Object
- false
    - Primitive
- foo
    - Neither
- function bar() { return "bar"; }
    - Object
- undefined
    - Primitive
- { a: 1, b: 2 }
    - Object

---

7. Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

```js
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
```

```js
for (let key in myObj) {
  console.log(key);
}
```

Without running this code, can you determine whether these two snippets produce the same output? Why?

<br>
<br>
<br>

They do not produce the same output. `Objet.keys` only returns the keys that are owned by the object not of it's prototype. `for..in` instead iterates over all the keys associated with the object.

---

8. Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

Here are some examples for your reference:

```js
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }
```

<br>
<br>
<br>

```js
function copyObj(obj, keys) {
  keys = keys ?? Object.keys(obj);
  let newObj = {};

  keys.forEach((key) => newObj[key] = obj[key]);
  return newObj;
}
```

---

9. What does the following program log to the console? Why?

```js
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
```

<br>
<br>
<br>

```
hi
hello
```

---

10. How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.

```js
[1, 2, ["a", ["b", false]], null, {}]
```

<br>
<br>
<br>

- Primitives
    - `1`
    - `2`
    - `"a"`
    - `"b"`
    - `false`
    - `null`

- Objects
    - `[1, 2, ["a", ["b", false]], null, {}]`
    - `["a", ["b", false]]`
    - `["b", false]`
    - `{}`

---

11. Write some code to replace the value 6 in the following object with 606:

```js
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
```

You don't have to search the object. Just write an assignment that replaces the 6.

<br>
<br>
<br>

```js
obj.bar[3].xyz = 606;
```

---

12. Consider the following code:

```js
function foo(bar) {
  console.log(bar, bar, bar);
}

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"
```

As written, this code will raise an error on line 6. Without creating a new function or changing lines 5 or 6, update this code to work as intended.

<br>
<br>
<br>

```js
function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo;

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"
```

---

13. Consider the following code:

```js
function foo(bar) {
  console.log(bar());
}

foo();    // Should print 'Welcome'
foo();    // Should print 3.1415
foo();    // Should print [1, 2, 3]
```

As written, this code will raise an error on line 5. Without modifying `foo`, update this code to print the desired text.

<br>
<br>
<br>

```js
function foo(bar) {
  console.log(bar());
}

foo(() => 'Welcome');    // Should print 'Welcome'
foo(() => 3.1415);    // Should print 3.1415
foo(() => [1, 2, 3]);    // Should print [1, 2, 3]
```

---

14. Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks.

```js
function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();
```

<br>
<br>
<br>

- variables
    - `hello`
    - `greeting`
    - `name`
    - `xyzzy`
    - `howdy`
    - `foo`

- property names
    - `a`
    - `b`
    - `c`
    - `d`

- Primitive values
    - `' '`
    - `1`
    - `2`
    - `3`
    - `4`
    - `5`
    - `'Hi'`
    - `'Grace'`

- Objects
    - `{ a: 1, b: 2, c: [3, 4, 5], d: {} }`
    - `[3, 4, 5]`
    - `{}`
    - `function hello(greeting, name) { return greeting + ' ' + name; }`
    - `function xyzzy() { return { a: 1, b: 2, c: [3, 4, 5], d: {} }; }`

---

15. Identify all of the variables, object property names, primitive values, and objects in the following code. This problem is even more challenging than the previous one.

```js
function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');
```

Note that some items in this program may appear in multiple categories.

<br>
<br>
<br>

- Variables
    - `bar`
    - `arg1`
    - `arg2`
    - `foo`
    - `qux`
    - `result`

- Property Names
    - `abc`
    - `def`
    - `ghi`
    - `jkl`
    - `mno`
    - `pqr`

- Primitive values
    - `'Hello'`
    - `1`
    - `2`
    - `3`
    - `4`
    - `5`
    - `6`
    - `null`
    - `NaN`
    - `'Victor'`
    - `'Antonina'`

- Objects
    - The `bar` function
    - object assigned to `qux` const
    - `[1, 2, 3, [4, 5, 6]]`
    - `[4, 5, 6]`
