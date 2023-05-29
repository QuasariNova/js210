What will the following code log to the console and why? Don't run the code until after you have tried to answer.

```js
const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
```

<br>
<br>
<br>

This will log:

```
['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']
```

This is because `array1` is a different array to `array2`. So, when add all the elements of `array1` to `array2` using the first `for` loop, they are two different arrays containing elements with the same values as each other, but are different.

Since they are different, when we reassign some of `array1`'s elements in the second `for` loop, we do not affect `array2`.

---

# Further Exploration

- What would happen if an object literal was part of the array1 elements pushed to array2? Would changes made to the object literal in array1 be reflected in array2?

    - If an object literal was part of the `array1` elements pushed to `array2` and was mutated, it would show changes in both array variables as objects are reference types and the reference is stored during assignment.

- How would you change the code so that any changes made to array1 in the second for loop get reflected to array2?
    - Change line 2 to `const array2 = array1` and remove the first `for` loop.
