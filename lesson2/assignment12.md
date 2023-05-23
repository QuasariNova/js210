What will the following code log to the console and why? Don't run it until you have tried to answer.

1.  ```js
    let myWord = 'Hello';
    let myOtherWord = myWord;

    console.log(myWord);
    console.log(myOtherWord);
    ```

<br>
<br>
<br>

```
Hello
Hello
```

Since you assign `myWord` to `myOtherWord` on line 2, both `myWord` and `myOtherWord` have the same value, thus output the same.

---

2.  ```js
    let myWord = 'Hello';
    let myOtherWord = myWord;
    myWord = 'Goodbye';

    console.log(myWord);
    console.log(myOtherWord);
    ```

<br>
<br>
<br>

```
Goodbye
Hello
```

Strings are not mutable as they are primitive types and assignment just changes the value of a variable to another value, not changing the value. Primitive types will store each instance in a different memory location, so there will be multiple `'Hello'`s stored on line 2.

---

3.  ```js
    let myWords = ['Hello', 'Goodbye'];
    let myOtherWords = myWords;
    myWords[0] = 'Hi';

    console.log(myWords);
    console.log(myOtherWords);
    ```

<br>
<br>
<br>

```
['Hi', 'Goodbye']
['Hi', 'Goodbye']
```

When objects are assigned to another variable, they both will point to the same object. Thus, when we mutate the object, as we do on line 3, both variables show the change.

---

4.  ```js
    let myWords = ['Hello', 'Goodbye'];
    let myOtherWords = myWords;
    myWords = ['Hi', 'Bye'];

    console.log(myWords);
    console.log(myOtherWords);
    ```

<br>
<br>
<br>

```
['Hi', 'Bye']
['Hello', 'Goodbye']
```

Reassigning a variable does not mutate the object it references, instead makes the variable reference another value.

---

5.  ```js
    let myWords = ['Hello', 'Goodbye'];
    let myWord = myWords[0];
    myWords[0] = 'Hi';

    console.log(myWords);
    console.log(myWord);
    ```

<br>
<br>
<br>

```
['Hi', 'Goodbye']
Hello
```

Since we assign the string in element 0 from `myWords` to `myWord` on line 2, it is copied in memory and `myWord` points to a different `'Hello'` than `myWords`. When we reassign element 0 from `myWords`, we are mutating `myWords`, but this does not effect `myWord`.

---

6.  ```js
    let myWords = ['Hello', 'Goodbye'];
    let myWord = 'Hi';
    myWords[0] = myWord;
    myWord = 'Hello';

    console.log(myWords);
    console.log(myWord);
    ```

<br>
<br>
<br>

```
['Hi', 'Goodbye']
Hello
```

For similar reasons as before, reassigning doesn't mutate unless its an element or property, thus reassigning `myWord` to `'Hello'` does not effect `myWords[0]`. They were pointing to different strings with the same value anyway.
