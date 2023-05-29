In the following code, a user creates a person object literal and defines two methods for returning the person's first and last names. What is the result when the user tries out the code on the last line?

```js
const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);
```

<br>
<br>
<br>

Since we don't call the methods in the template, it should output:

```
firstName() {
    return 'Victor';
  } lastName() {
    return 'Reyes';
  }
```

Functions convert to their declaration, body and all, when they are coerced to a string.
