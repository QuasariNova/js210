1. What side effects are present in the `foo` function in the following code?

    ```js
    const bar = 42;
    let qux = [1, 2, 3];
    let baz = 3;

    function foo(arr) {
      let value = arr.pop();
      console.log(`popped ${value} from the array`);
      return value + bar + baz;
    }

    foo(qux);
    ```

    <br>
    <br>
    <br>

    1. It mutates the array passed to it by calling the `pop` method on it. `qux` becomes `[1, 2]`.

    2. `foo` outputs to the console.

---

2. Which of the following functions are pure functions?
    Function 1

    ```js
    function sum(a, b) {
      console.log(a + b);
      return a + b;
    }
    ```

    Function 2

    ```js
    function sum(a, b) {
      a + b;
    }
    ```

    Function 3

    ```js
    function sum(a, b) {
      return a + b;
    }
    ```

    Function 4

    ```js
    function sum(a, b) {
      return a + b + Math.random();
    }
    ```

    Function 5

    ```js
    function sum(a, b) {
      return 3.1415;
    }
    ```

Functions 2, 3, and 5. They have no side effects and will return the same value given the same arguments.
