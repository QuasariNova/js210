Predict output to the following programs and explain why they output what they do:

1.  ```js
    let a = 'outer';

    function testScope() {
      let a = 'inner';
      console.log(a);
    }

    console.log(a);
    testScope();
    console.log(a);
    ```

<br>
<br>
<br>

This will ouptut:

```
outer
inner
outer
```

This is because the variable `a` declared on line 1 is visibly scoped to the global level, while the `a` declared on line 4 is locally scoped to the `testScope` function. So, the `console.log` calls on lines 8 and 10 reference the global `a`, while the call to `testScope` on line 9 will call `console.log` on 5 passing the `testScope`'s `a` and outputing its value.

---

2.  ```js
    let a = 'outer';

    function testScope() {
      a = 'inner';
      console.log(a);
    }

    console.log(a);
    testScope();
    console.log(a);
    ```

<br>
<br>
<br>

Output should be:
```
outer
inner
inner
```

This is because, unlike the previous example, `a` is being reassigned on line 4 instead of shadowed by another declaration.

---

3.  ```js
    let basket = 'empty';

    function goShopping() {
      function shop1() {
        basket = 'tv';
      }

      console.log(basket);

      let shop2 = function() {
        basket = 'computer';
      };

      const shop3 = () => {
        let basket = 'play station';
        console.log(basket);
      };

      shop1();
      shop2();
      shop3();

      console.log(basket);
    }

    goShopping();
    ```

<br>
<br>
<br>

The output should be:

```
empty
play station
computer
```

On line 1, we declare the variable `basket` on the global level and assigns it the string `'empty'`. On line 26, we call the `goShopping` funciton, which is declared on lines 3 to 24.

In the `goShopping` function, we invoke the `console.log` function and pass `basket` as an argument on line 8, which outputs `empty`.

On line 19, we invoke the `shop1` function, which is declared on lines 4 to 6. The `shop1` function reassigns `basket` to the string `'tv'`.

On line 20, we invoke the `shop2` function, which is declared on lines 10 to 12. The `shop2` function reassigns `basket` to the string `'computer'`.

On line 21, we invoke the `shop3` function, which is declared as a constant assigned to an arrow function on lines 14 to 17. This `shop3` call declares a local variable `basket` and assigns it the string `'play station'`. This `basket`, shadows the `basket` declared on line 1, thus this assignment does not change that `basket` from its current value `'computer'`. The function then calles `console.log` and passes its `basket` variable as an argument, which outputs `play station`.

Finally, on line 23, we invoke `console.log` and pass `basket` as an argument. This time we are passing the `basket` declared on line 1 that has a value of `'computer'`, thus it outputs `computer`.

---

4.  ```js
    function hello() {
      a = 'hi';
    }

    hello();
    console.log(a);
    ```

<br>
<br>
<br>

This will output `hi`. Since we do not use `let`, `const`, `function` or `var` to declare `a` on line 2, it is declared as a global variable, thus is accessible by the `console.log(a)` on line 6, since we have already declared and initialized it by invoking `hello` on line 5.

---

5.  ```js
    function hello() {
      let a = 'hello';
    }

    hello();
    console.log(a);
    ```

<br>
<br>
<br>

This will raise a `ReferenceError`. This is because `a` is declared with `let` on line 2 within the function `hello` and is not accessible outside the function. So when we try to access it on line 6, we can't and raise an error.

---

6.  ```js
    console.log(a);

    var a = 1;
    ```

<br>
<br>
<br>

This will output `undefined`

This is because since `a` is declared with `var` on line 3, it is 'hoisted' to the top and declared with an `undefined` value. Since it is accessed before it is initialized on line 1, it outputs `undefined`.

---

7.  ```js
    console.log(a);

    let a = 1;
    ```

<br>
<br>
<br>

This will raise a `ReferenceError`.

The variable `a` is declared with `let` on line 3, but we are trying to access it on line 1. While, `a`s declaration is "hoisted" to the top, since it was done with `let`, it is left unset and will raise an error if tried to be accessed before being initialized.

---

8.  ```js
    console.log(a);

    function hello() {
      a = 1;
    }
    ```

This will raise a `ReferenceError`

Since `a` is declared and initialized as a global variable inside `hello` on line 4, it won't be "hoisted" into the global scope, thus won't be declared until `hello` is called. Since we try to reference `a` prior to it being declared on line 1, it raises an error.
