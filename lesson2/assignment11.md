What will the following code log to the console and why? Don't run it until you have tried to answer.


1.  ```js
    let myWord = 'Hello';
    myWord.concat(' there.');

    console.log(myWord);
    ```

<br>
<br>
<br>

The console will log `Hello`. This is because a string is a primitive value, thus immutable, therefore calling `concat` on it returns a new string, but does not change `myWord`'s value.

---

2.  ```js
    let myWord = 'Hello';
    myWord.repeat(3);
    console.log(myWord);
    myWord.replace('H', 'J');
    console.log(myWord);
    myWord.split(' ');
    console.log(myWord);
    ```

<br>
<br>
<br>

Output:

```
Hello
Hello
Hello
```

Strings are immutable as a primitive value, thus no matter what method you call on `myWord` it can not change unless reassigned.

---

3.  ```js
    let myWords = ['Hello'];
    myWords.push('Goodbye');

    console.log(myWords);
    ```

<br>
<br>
<br>

This will output `['Hello', 'Goodbye']` This is because arrays are objects, thus mutable. The `push` method will add the value passed to it to the end of the array, thus `myWords` is mutated and adds `'Goodbye'` as a second element.

---

4.  ```js
    let myWords = ['Hello'];
    myWords.concat(['Goodbye']);

    console.log(myWords);
    ```

<br>
<br>
<br>

This will output `['Hello']`. While arrays are mutable, you would have to call a method to mutate the object and the `concat` method does not mutate the array its called on or the one passed as an argument and returns a new array that is a combination of both. Since `myWords` was not mutated, it's value stays the same when output.

---

5.  ```js
    let myWords = ['Hello'];
    myWords[0].toUpperCase();

    console.log(myWords);
    ```

<br>
<br>
<br>

This will output `['Hello']`. While again, arrays are objects, thus can be mutated, we are calling the `toUpperCase` method on it's element, which is a string. Strings are primitive values, thus immutable, so the value does not change.

---

6.  ```js
    let myWords = ['Hello'];
    myWords[0] = myWords[0].toUpperCase();

    console.log(myWords);
    ```

This will output `['HELLO']`. While strings are immutable, we are reassigning the first element of `myWords` with the return value of `toUpperCase` called on the first element of `myWords`. This reassignment mutates `myWords` and shows up when logged.
