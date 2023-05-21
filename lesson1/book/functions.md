1. What does this code log to the console? Does executing the foo function affect the output? Why or why not?

```js
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
```

<br>
<br>
<br>

This will output `1`. The call to `foo` does not hcange the value of `bar` because it another `bar` variable is declared at the local level inside `foo` and shadows it. It does not reassign `bar` on line 3.

---

2. In the exercises for the previous chapter, you wrote a dynamic greeter program named `greeter.js`. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.

<br>
<br>
<br>

```js
// greeter.js
let rlSync = require('readline-sync');

function prompt(text) {
  return rlSync.question(text + ' ');
}

let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?');

console.log(`Hello, ${firstName} ${lastName}!`);
```

---

3. Write a program that uses a `multiply` function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

```
$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566
```

<br>
<br>
<br>

```js
// multiply.js
let rlSync = require('readline-sync');

function multiply(a, b) {
  return a * b;
}

first = Number(rlSync('Enter the first number: '));
second = Number(rlSync('Enter the second number: '));

console.log(`${first} * ${second} = ${multiply(first, second)}`);
```

---

4. What does the following code log to the console?

```js
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');
```

<br>
<br>
<br>

This code does not log anything to the console.

---

5. What does the following code log to the console?

```js
function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');
```

<br>
<br>
<br>

This code does not log anything to the console.

---

6. Given this code:

```js
function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);
```

Identify the following items:

- the function arguments
    - `2`
    - `3`
    - `4`
- the function body
    ```js
    {
      let result = num1 * num2 * num3;
      return result;
    }
    ```
- the function declaration
    ```js
    function multiplyNumbers(num1, num2, num3) {
      let result = num1 * num2 * num3;
      return result;
    }
    ````
- the function invocation
    ```js
    multiplyNumbers(2, 3, 4)
    ````
- the function name
    - `multiplyNumbers`
- the function parameters
    - `num1`
    - `num2`
    - `num3`
- the function return value
    - `result`, which in this case is `24`
- the names of all variables in this program
    - `multiplyNumbers`
    - `num1`
    - `num2`
    - `num3`
    - `result`
    - `product`

---

Without running the following code, what do you think it will output?

```js
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');
```

<br>
<br>
<br>

```
Hello
undefined
```

---

8. Without running the following code, what do you think it will output?

```js
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);
```

<br>
<br>
<br>

```
42
3.1415
```

---

9. Identify all of the variables named on each line of the following code. You may assume that `question` is the name of a built-in function in JavaScript (it is not, so this code won't work as written).

```js
function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
```

<br>
<br>
<br>

    1.`multiply`, `left`, `right`
    2.`product`, `left`, `right`
    3.`product`
    6.`getNumber`, `prompt`
    7.`parseFloat`, `question`, `prompt`
    10.`left`, `getNumber`
    11.`right`, `getNumber`
    12.`console`, `left`, `right`, `multiply`

---

10. Using the code from Exercise 9, classify each variable name as either global or local. For our purposes here, you may assume that the code from Exercise 9 is the entire program.

<br>
<br>
<br>

- global
    - `multiply`
    - `getNumber`
    - `parseFloat`
    - `question`
    - `left` outside `multiply`
    - `right` outside `multiply`
    - `console`
- local
    - `left` inside `multiply`
    - `right` inside `multiply`
    - `product`
    - `prompt`

---

11. Using the code from Exercise 9, are the `left` and `right` variables on lines 1 and 2 the same as the `left` and `right` variables on lines 10-12? Explain your reasoning.

<br>
<br>
<br>

No, they are declared local to the `multiply` function and shadow the global `left` and `right` declared on lines 10 and 11. Also, since they were declared after the function declaration, they would not be accessible inside the funtion.
