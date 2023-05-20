1. Write a program named `greeter.js` that greets `'Victor'` three times. Your program should use a variable and not hard code the string value `'Victor'` in each greeting. Here's an example run of the program:

```
$ node greeter.js
Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.
```

<br>
<br>
<br>

```js
// greeter.js
let name = 'Victor';
console.log(`Good Morning, ${name}.`);
console.log(`Good Afternoon, ${name}.`);
console.log(`Good Evening, ${name}.`);
```

---

2. Write a program named `age.js` that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

```
You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.
```

<br>
<br>
<br>

```js
let age = 20;
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
```

---

3. What happens when you run the following program? Why do we get that result?

```js
{
  let foo = 'bar';
}

console.log(foo);
```

<br>
<br>
<br>

We would get a `ReferenceError` raised because `foo` was declared inside a block that is outside the scope of the `console.log` call.

---

4. What happens when you run the following code? Why?

```js
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
```

<br>
<br>
<br>

The code would first output `Good Morning, Victor`, `Good Afternoon, Victor,`, and `Good Evening, Victor`. After that, it would raise a `TypeError` because constants cant be reassigned due to them being immutable. Joe would not be greeted.

---

5. Take a look at this code snippet:

```js
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
```

What does this program log to the console? Why?

<br>
<br>
<br>

This code would output `bar`. The second `foo` variable is defined inside a block and would shadow the original `foo` instead of reassigning it's value since we used `let`.

---

6. Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

<br>
<br>
<br>

No, because constants, like variables declared with `let` have block scope and the `FOO` declared on line 3 shadows the `FOO` declared on line 1, due to being in a separate block.
