Read through the following code. Currently, it does not log the expected result. Explain why this happens, then refactor the code so that it works as expected.

```js
const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true
```

<br>
<br>
<br>

`person` and `otherPerson` are two different objects in memory and `===` only checks references, thus two different references makes it false.

Two solutions:

```js
const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);
```

or:

```js
const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person.name === otherPerson.name);
```
