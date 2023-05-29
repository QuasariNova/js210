Identify the code that violates the Airbnb JavaScript style guide, and update the code to fix the issues you identify. There may be more than one issue in each code snippet.

1.  ```js
    let title = "The Three-Body Problem";
    ```

    <br>
    <br>
    <br>

    - Use single quotes '' for strings.

    ```js
    let title = 'The Three-Body Problem';
    ```

---

2.  ```js
    let title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;
    ```

    <br>
    <br>
    <br>

    - Use one `const` or `let` declaration per variable or assignment.
    - camelCase variables

    ```js
    let title = 'The Three-Body Problem';
    let author = 'Cixin Liu';
    let pageCount = 400;
    ```

---

3.  ```js
    let completed = lastPageRead == 400;
    ```

    <br>
    <br>
    <br>

    - Use `===` and `!==` over `==` and `!=`.

    ```js
    let completed = lastPageRead === 400;
    ```

---

4.  ```js
    if (finishedBook())
      console.log('You have finished reading this book');
    ```

    <br>
    <br>
    <br>

    - Use braces with all multiline blocks.

    ```js
    if (finishedBook()) {
      console.log('You have finished reading this book');
    }
    ```

5.  ```js
    function read(pages) {
          console.log('You started reading.');
          for (let page=0; page<pages; page++) {
                  let message = 'You read page '+page;
                  console.log(message);
          }
    }

    read(400);
    ```

    <br>
    <br>
    <br>

    - Use named function expressions instead of function declarations.
    - Set off operators with spaces.
    - Use soft tabs (space character) set to 2 spaces.
    - Avoid using unary increments and decrements
    - When programmatically building up strings, use template strings instead of concatenation.

    ```js
    const read = function read(pages) {
      console.log('You started reading.');
      for (let page = 0; page < pages; page += 1) {
        let message = `You read page ${page}`
        console.log(message);
      }
    }

    read(400);
    ```
