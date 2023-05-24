What will the following code log to the console and why? Don't run it until you have tried to answer.

1.  ```js
    let color = 'yellow';
    let colors = ['red', 'green', 'blue'];

    function updateColors(colors) {
      colors.push(color);
    }

    updateColors(colors)
    console.log(colors);
    ```

<br>
<br>
<br>

```
['red', 'green', 'blue', 'yellow']
```

This is because `colors` is an object and we pass it's reference to `updateColors` on line 8. Since we use the destructive method `push` on `colors`, it mutates the object.

---

2.  ```js
    let color = 'yellow';
    let colors = ['red', 'green', 'blue'];

    function updateColors(colors, color) {
      colors.push(color);
    }

    updateColors(colors)
    console.log(colors);
    ```

<br>
<br>
<br>

```
[`red`, `green`, `blue`, undefined]
```

This is similar to 1, but we shadow the `color` global variable with the parameter `color` in the function declaration. Since we don't pass a value for the color parameter on line 8, it is initialized as `undefined` and is put at the end of the array through the destructive method `push` on line 5.

---

3.  ```js
    let color1 = 'purple';
    let color2 = 'pink';
    let colors = ['red', 'green', 'blue'];

    function updateColors(colors, color) {
      colors.push(color);
    }

    updateColors(colors, color1);
    updateColors(colors, color2);
    console.log(colors);
    ```

<br>
<br>
<br>

```
['red', 'green', 'blue', 'purple', 'pink']
```

This is similar to #2, but this time we pass both `color1` and `color2` to the function on lines 9 and 10. Since we actually passed a value to the parameter, it adds their values to the array on line 6.

---

4.  ```js
    let color1 = 'purple';
    let color2 = 'pink';
    let colors = ['red', 'green', 'blue'];

    function updateColors(colors, color) {
      colors.push(color);
      return colors;
    }

    let newColors = updateColors(colors, color1);
    updateColors(newColors, color2);
    console.log(colors);
    ```

<br>
<br>
<br>

```
['red', 'green', 'blue', 'purple', 'pink']
```

This is very similar to the previous exercise, but this time our `updateColors` function returns the reference to the array. So on line 10, when we declare and initialize `newColors` to the return value of the `updateColors` call, it gains the reference to the same object as `colors`. When we pass `newColors` to `updateColors` on line 11, we are mutating the same array as `colors`, thus we see the changes when we log it on line 12.

---

5.  ```js
    let color = 'purple';
    let colors = ['red', 'green', 'blue'];

    function addColor(colors, color) {
      colors.push(color);
      return colors;
    }

    function removeColor(colors) {
      color = colors.pop();
      return colors;
    }

    let newColors = removeColor(colors);
    addColor(colors, color);
    console.log(newColors);
    ```

<br>
<br>
<br>

```
['red', 'green', 'blue']
```

Again, very similar to the last exercise. This time we have two function, an `addColor` function that is the same as our previous `updateColors` function and a new `removeColor` function that uses the `pop` method to destructively remove the last element of the array passed to it and return that array.

On line 14, when we declare and initialize the `newColors` array to the return value of `removeColor`, we are removing the last element of the `colors` array, reassigning `color` to that element, and assigning `newColors` to the reference of the `colors` array. `newColors` and `colors` still point to the same array, so on line 15 when we use the function `addColor` to add `color` to the `colors` array, it is reflected with `newColors` when we log it on line 16.

---

6.  ```js
    function capitalize() {
      return word[0].toUpperCase() + word.slice(1);
    }

    function exclaim() {
      return word += '!!!';
    }

    let word = 'hello';
    let capitalizedWord = capitalize(word);
    let exclaimedWord = exclaim(capitalizedWord);

    console.log(word);
    console.log(capitalizedWord);
    console.log(exclaimedWord);
    ```

<br>
<br>
<br>

```
hello!!!
Hello
hello!!!
```

Strings are primitive values and can't be mutated, thus no matter what the functions `capitalize` and `excalim` do, they can't change the strings already stored in the variables `word` and `captitalizedWord`.

However, `exclaim` does not have a parameter, so it ignores the argument passed to it and instead reassigns `word` prior to returning that value. Thus, we do see a change in `word` that is the same as `exclaimedWord`.

---

7.  ```js
    function capitalize(word) {
      return word[0].toUpperCase() + word.slice(1);
    }

    function exclaim(word) {
      return word += '!!!';
    }

    let word = 'hello';
    let capitalizedWord = capitalize(word);
    let exclaimedWord = exclaim(capitalizedWord);

    console.log(word);
    console.log(capitalizedWord);
    console.log(exclaimedWord);
    ```

<br>
<br>
<br>

```
hello
Hello
Hello!!!
```

This is similar to the previous, but this time `exclaim` has one parameter, `word`, which shadows the global `word`. Because of this, the global `word` isn't changed and the value in `capitalizedWord` is used as a base instead of `word`.
