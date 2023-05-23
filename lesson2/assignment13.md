What will the following code log to the console and why? Don't run it until you have tried to answer.

1.  ```js
    function changeMyWord(word) {
      console.log(word);
      word = word.toUpperCase();
    }

    let myWord = 'Hello';
    changeMyWord(myWord);
    console.log(myWord);
    ```

<br>
<br>
<br>

```
Hello
Hello
```

This is because the assignment on 3 does not effect the variable `myWord` declared on line 6 and instead effects the parameter `word` defined on line 1. Passing a primitive value acts as passing a value, thus nothing could of changed `myWord` in the function anyway.

---

2.  ```js
    function changeMyWord(word) {
      console.log(word);
      word = word.toUpperCase();
      return word;
    }

    let myWord = 'Hello';
    myWord = changeMyWord(myWord);
    console.log(myWord);
    ```

<br>
<br>
<br>

```
Hello
HELLO
```

Similar to 1, the `changeMyWord` function can't mutate the string passed to it, but it does return the changed string on line 4, which use to reassign `myWord` on line 8.

---

3.  ```js
    function changeMyWord(word) {
      console.log(word);
      word = word.toUpperCase();
      return word;
    }

    let myWord = 'Hello';
    let myOtherWord = changeMyWord(myWord);
    console.log(myWord);
    console.log(myOtherWord);
    ```

<br>
<br>
<br>

```
Hello
Hello
HELLO
```

Similar to 2, but since we don't reassign `myWord`, nothing has been done to change its value. Nothing done by `changeMyWord` can change `myWord`, since it is assigned to a primitive.

---

4.  ```js
    function changeMyWords(words) {
      console.log(words);
      words[0] = 'Hi';
    }

    let myWords = ['Hello', 'Goodbye'];
    changeMyWords(myWords);
    console.log(myWords);
    ```

<br>
<br>
<br>

```
['Hello', 'Goodbye']
['Hi', 'Goodbye']
```

Unlike the previous exercises, this time we are passing a reference to an object to the `changeMyWords` function. This means it can mutate it and does on line 3 by reassigning the first element.

---

5.  ```js
    function changeMyWords(words) {
      console.log(words);
      words = ['Hi', 'Goodbye'];
    }

    let myWords = ['Hello', 'Goodbye'];
    changeMyWords(myWords);
    console.log(myWords);
    ```

<br>
<br>
<br>

```
['Hello', 'Goodbye']
['Hello', 'Goodbye']
```

Unlike 4, this time we don't mutate the array passed to `changeMyWords`, thus it doesn't change. Reassignment of a variable does not mutate the previous reference, it just changes the reference.
