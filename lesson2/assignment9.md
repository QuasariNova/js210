Predict output and explain for each:

1.  ```js
    function say() {
      if (false) {
        var a = 'hello from inside a block';
      }

      console.log(a);
    }

    say();
    ```

<br>
<br>
<br>

This outputs `undefined`.

This is because `a` is declared with `var` on line 3. Variables declared with `var` are scoped at the function level, thus even though the `if` state ment on lines 2 through 4 is not executed, `a` is still declared. Since it was declared with `var`, that means it was set to `undefined` until it is initialized. It was not initialized, so on line 9 when we call `console.log` and pass `a` as an argument it outputs `undefined`.

---

2.  ```js
    function say() {
      if (false) {
        let a = 'hello from inside a block';
      }

      console.log(a);
    }

    say();
    ```

<br>
<br>
<br>

This will raise a `ReferenceError`.

This is because `a` is declared with a `let` statement on line 3. `let` declared variables are scoped on the block level, thus it is not available outside the block defined on lines 2 through 4 as part of the `if` statement. Since we try to access `a` on line 6 outside this block, it can't find it and raises the error.

---

3.  ```js
    function hello() {
      a = 'hello';
      console.log(a);

      if (false) {
        var a = 'hello again';
      }
    }

    hello();
    console.log(a);
    ```

<br>
<br>
<br>

This outputs `hello` then raises a `ReferenceError`.

This is because `a` is declared on line 6 with a `var` statement. `var` declarations are scoped at the function level, thus is discovered during the creation phase. Because of this, when we assign `a` to the string `'hello'` on line 2 it is assigning it to the local variable `a` declared on line 6 instead of a global variable `a`. We then use `console.log` to output that value on line 3. On line 11, since `a` was scoped to the function `hello` and we are no longer inside that function, Javascript cannot find `a` and raises an error.

---

4.  ```js
    function hello() {
      a = 'hello';
      console.log(a);

      if (false) {
        let a = 'hello again';
      }
    }

    hello();
    console.log(a);
    ```

<br>
<br>
<br>

This will output:

```
hello
hello
```

This is because when we declare the `a` variable using `let` on line 6, it is scoped at the block level, thus it is innacessible outside the `if` statments block defined on lines 5 though 7. Due to this, when we assign `a` on line 2, it is declared and initialized as a global variable. Both the `console.log`s on line 3 and line 11 access this global variable `a` and print `hello` to the log.

---

5.  ```js
    var a = 'hello';

    for (var index = 0; index < 5; index += 1) {
      var a = index;
    }

    console.log(a);
    ```

<br>
<br>
<br>

This will output `4`.

This is because `var` declares variables at the function scope, so both the `a` declared on line 1 and the `a` declared on line 4 are the same `a`. Javascript ignores repeat declarations for `var` statements, so this is ok. Since they are the same variable, the last assignment will be what is output with line 7's call to `console.log`, which is `4`.

---

6.  ```js
    let a = 'hello';

    for (let index = 0; index < 5; index += 1) {
      let a = index;
    }

    console.log(a);
    ```

<br>
<br>
<br>

This will output `hello`

This is because `let` declarations are scoped at the block level, thus the `a` declared on line 4 is scoped to the `for` loops block defined on lines 3 to 5 and is different from the `a` declared on line 1. Thus, the call to `console.log` on line 7 is passed the `a` declared on line 1 as an argument and outputs `hello`.

---

7.  ```js
    let a = 1;

    function foo() {
      a = 2;
      let bar = function() {
        a = 3;
        return 4;
      };

      return bar();
    }

    console.log(foo());
    console.log(a);
    ```

<br>
<br>
<br>

This will output:

```
4
3
```

On line 1 we declare the variable `a` and initialize it to the value `1`. On line 13, we invoke `console.log` and pass it the return value of the function `foo` after invoking `foo`.

`foo` is declared on lines 3 through 11. This function has access to the variable `a` as `a` is in a scope above it(global). It reassigns `a` to `2` on line 4. It then declares the local variable `bar` and initializes it to an anonymous function expression. We then call the function pointed to by `bar` and return its return value.

`bar`'s function is declared on lines 5 through 8. It is able to access `a` since `a` is in a scope above it. It reassigns `a` to `3` on line 6 and returns `4` on line 7. `4` gets returned on line 10, which is passed to the `console.log` on line 13 as an argument and outputs `4`.

On line 14, we output the value of `a` by passing it `console.log` as an argument and output `3`.
---

8.  ```js
    var a = 'global';

    function checkScope() {
      var a = 'local';
      const nested = function() {
        var a = 'nested';
        let superNested = () => {
          a = 'superNested';
          return a;
        };

        return superNested();
      };

      return nested();
    }

    console.log(checkScope());
    console.log(a);
    ```

<br>
<br>
<br>

Output:

```
superNested
global
```

This is because `a` is declared in the global scope on line 1 and the `a` declaration on line 4 shadows it. This causes the `console.log(a);` on line 19 to output `global`, since the global `a` is never reassigned.

The `console.log(checkScope());` call will log `superNested` as the return value of `checkScope()` will return the value returned by a call to `superNested`. Since the `a` being reassigned on line 8 is different from the global `a`, it doesn't effect the global `a` and is assigned `'superNested'`, which is then returned on line 9, 12, and 15 down to the `console.log` which outputs `superNested`

---

9.  ```js
    let a = 'outer';
    let b = 'outer';

    console.log(a);
    console.log(b);
    setScope(a);
    console.log(a);
    console.log(b);

    function setScope(foo) {
      foo = 'inner';
      b = 'inner';
    }
    ```

<br>
<br>
<br>

Output:

```
outer
outer
outer
inner
```

This is because `b` is accessible by the function `setScope(foo)` and when `b` is reassigned to `'inner'` it effects the global `b`. While `a` was passed to `setScope` on line 6 and it's value is assigned to `foo`, reassigning `foo` on line 11 does not change `a`'s value.

---

10. ```js
    let total = 50;
    let increment = 15;

    function incrementBy(increment) {
      total += increment;
    }

    console.log(total);
    incrementBy(10);
    console.log(total);
    console.log(increment);
    ```

<br>
<br>
<br>

Output:
```
50
60
15
```

The main takeaways is that the `increment` parameter to the function `incrementBy` is a different variable than the global `increment` declared on line 2 and shadows it. Thus, passing `10` as an argument to it on line 9, does not effect the `increment` in the global scope.

---

11. ```js
    let a = 'outer';

    console.log(a);
    setScope();
    console.log(a);

    var setScope = function () {
      a = 'inner';
    };
    ```

<br>
<br>
<br>

Outputs `outer` then raises a `TypeError`.

This is because, while the variable `setScope` is declared on line 7 and hoisted to the top, since it is assigned to a function expression on line 7, it will not point to that function until line 7, instead it will have the value `undefined` since it was declared with `var`. Since it isn't a function on line 4, it raises an error.
