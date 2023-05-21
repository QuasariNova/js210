1. Modify the `age.js` program you wrote in the exercises for the Input/Output chapter. The updated code should use a `for` loop to display the future ages.

<br>
<br>
<br>

```js
// age.js
let rlSync = require('readline-sync');

let age = parseInt(rlSync.question('How old are you?'));
console.log(`You are ${age} years old.`);
for(let years = 10; years < 50; years += 10) {
  console.log(`In ${years} years, you will be ${age + years} years old.`);
}
```

---

2. Write a function that computes and returns the factorial of a number by using a `for` loop. The factorial of a positive integer `n`, signified by `n!`, is defined as the product of all integers between `1` and `n`, inclusive:

| n! | Expansion | Result |
|:---:|:---:|:---:|
| 1! | 1 | 1 |
| 2! | 1 * 2 | 2 |
| 3! | 1 * 2 * 3 | 6 |
| 4! | 1 * 2 * 3 * 4 | 24 |
| 5! | 1 * 2 * 3 * 4 * 5 | 120 |

You may assume that the argument is always a positive integer.

Examples

```js
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
```

<br>
<br>
<br>

```js
function factorial(n) {
  let answer = 1;

  for(i = n; i > 0; --i) {
    answer *= i;
  }

  return answer;
}
```

---

3. The following code causes an infinite loop (a loop that never stops iterating). Why?

``` js
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
```

<br>
<br>
<br>

Because the expression evaluated by the `while` loop on line 3 is using the assignment operator instead of some comparison operator, it will always be truthy, thus will never break the loop on the conditional. Line 7 will never execute the if statement because every loop, `counter` is assigned the value `1` and then incremented by `1`, which means it will never be a value greater than `2`.

---

4. Does the following code produce an error? Why or why not? What output does this code send to the console?

```js
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
```

<br>
<br>
<br>

No this code does not generate an error. Instead it will output:

```
1
2
3
4
5
```

---

5. The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.

```js
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
```

<br>
<br>
<br>

```js
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2)

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
```

---

6. Reimplement the `factorial` function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.

Examples

```js
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
```

<br>
<br>
<br>

```js
function factorial(n) {
  if (n === 1)
    return 1;
  else
    return n * factorial(n - 1);
}
```
