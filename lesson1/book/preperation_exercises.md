1. Create a directory named `my_folder` and navigate to that directory. Create two files named `one.js` and `two.js` in `my_folder`. Add the following JavaScript code to `one.js`:

```js
console.log("this is file one");
```

Add some code to `two.js` that logs `'this is file two'`.

When you're finished, run both programs with node.

    ```bash
    mkdir my_folder
    cd my_folder
    touch one.js
    touch two.js
    echo "console.log('this is file one');" > one.js
    echo "console.log('this is file two');" > two.js
    node one.js
    node two.js
    ```

---

2. When you finish Exercise 1, navigate to the directory above the `my_folder` directory and delete all the content you generated in exercise 1 with one command.

    ```bash
    cd ..
    rm -R my_folder
    ```

---

3. Create a file named `foo.js` in a directory named `preparations_exercises`. Add the following code to the file.

```js
let foo = "bar";
console.log(foo);
foo;
```

    ```bash
    mkdir preparations_exercises
    cd preperations_exercises
    touch foo.js
    # Add code to file in editor
    ```

---

4. Complete the following:

    1. Use node to run the foo.js file using node. What does it output?

        ```bash
        node foo.js

        # Output:
        # bar
        ```

    2. Copy and paste the code from foo.js into the node REPL. What does it output?

        ```js
        > let foo = 'bar'
        = undefined
        > console.log(foo);
        bar
        = undefined
        > foo
        = 'bar'
        ```

    3. Copy and paste the code from foo.js into the Chrome console REPL. What does it output?

        ```js
        > let foo = 'bar';
          console.log(foo);
          foo
        bar
        = "bar"
        ```

---

5. Identify the Constructors for each of the following methods and classify each method as either a "Static" or a "Prototype" method:

    - substring
        - String Prototype method
    - create
        - Object Static method
    - fromCharCode
        - String Static method
    - slice
        - Array Prototype method
        - String Prototype method
    - toString
        - Array Prototype method
        - Number Prototype method
        - Object Prototype method
        - String Prototype method

It might be that more than one constructor provides a method with a given name. Make sure you list them all in your answer. You can limit your search for methods to the String, Object, Array, and Number constructors.

---

6. Which of the following names satisfy the style guidelines for variable names? For the purposes of this question, constants are not variables.

| Name |
|:---:|
| index |
| CatName |
| snake_case |
| lazyDog |
| quick_Fox |
| 1stCharacter |
| operand2 |
| BIG_NUMBER |


    - index
    - lazyDog
    - operand2
---

7. Which of the following names satisfy the style guidelines for function names?

| Name |
|:---:|
| index |
| CatName |
| snake_case |
| lazyDog |
| quick_Fox |
| 1stCharacter |
| operand2 |
| BIG_NUMBER |

    - index
    - CatName
    - lazyDog
    - operand2

---

8. Which of the following names satisfy the style guidelines for constants used to represent magic numbers?

| Name |
|:---:|
| index |
| CatName |
| snake_case |
| lazyDog |
| quick_Fox |
| 1stCharacter |
| operand2 |
| BIG_NUMBER |

    - BIG_NUMBER

---

9. Which of the following names don't satisfy the style guidelines for naming variables, functions, or constants?

| Name |
|:---:|
| index |
| CatName |
| snake_case |
| lazyDog |
| quick_Fox |
| 1stCharacter |
| operand2 |
| BIG_NUMBER |

    - snake_case
    - quick_Fox
    - 1stCharacter
