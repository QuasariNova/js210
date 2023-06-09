# Variables and Types
## Variables
### Identifiers ([Variables and Variable Names](https://launchschool.com/books/javascript/read/variables#variablesandvariablenames))
- Variable names are often known more broadly as identifiers
- JavaScript Identifiers include:
    - Variables declared by `let` or `var`
    - Constants declared by `const`
    - Property names of objects
        - Properties are not variables
    - Function names
    - Function Parameters
    - Class names

### Declaration ([Declaring and Assigning Variables](https://launchschool.com/books/javascript/read/variables#declaringandassigningvariables)) ([Lesson 1: Variables](https://launchschool.com/lessons/7377ece4/assignments/4a43f341))
- `let`
    - Block scoped
    - When hoisted is unset until initialized. Will throw a `ReferenceError` if accessed prior to initialization.
- `const`
    - Block scoped
    - When hoisted is unset until initialized. Will throw a `ReferenceError` if accessed prior to initialization.
    - Is a constant, can't change its reference
    - Must have an initializer with its declaration.
- `var`
    - Function scoped
    - When hoisted is initialized to `undefined` until assigned a value.
    - When declared in the global scope becomes a property of the global object.
    - When declared in a block that is not run, is still declared due to hoisting
- undeclared
    - Undeclared variables are global variable.
    - They happen when you assign a variable that hasn't been declared.

### Variables as pointers ([Variables as Pointers](https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers)) ([Lesson 2: Pass by Reference vs Pass by Value](https://launchschool.com/lessons/7cd4abf4/assignments/c7e3e102))
- Variables are pointers to addresses in memory
- Primitive types values exist at that memory address (pass-by-value)
    - When a variable with a primitive type is assigned to another variable, the primitive types value is copied to the other variables address.
- Compound data types values exist at another memory address (pass by value of the reference)
    - When a compound data type is assigned to a variable, the variable stores the memory address for that type at its address.
    - When assigning a variable with a compound data type to another variable, the memory address to the object is given to the new variable.

### naming conventions (legal vs idiomatic) ([Lesson 1: Variables](https://launchschool.com/lessons/7377ece4/assignments/4a43f341)) ([Lesson 1: Code Style](https://launchschool.com/lessons/7377ece4/assignments/88ed1c52))
- Legal
    - Case-Sensitive
    - Any length
    - Must start with a letter, _, or $
    - Must be made up of letters, numbers, _s, and/or $s
    - Must not be a reserved word
- Idiomatic
    - cameCase for most variables and functions
    - PascalCase for constructor functions
    - SCREAMING_SNAKE_CASE for unchanging configuration values and magic numbers
    - Don't start variables with `_` or `$`
    - Acronyms are all caps


### Assignment ([Declaring and Assigning Variables](https://launchschool.com/books/javascript/read/variables#declaringandassigningvariables)) ([Lesson 1: Variables](https://launchschool.com/lessons/7377ece4/assignments/4a43f341))
- `=` operator
    - When used with a `let`, `var`, or `const` statement is considered an initializer instead of assignment
    - Can be used with `[]` or `.` notation to mutate object properties.

### Comparison ([Equality Comparison](https://launchschool.com/books/javascript/read/basics#equalitycomparison)) ([Lesson 1: Operators](https://launchschool.com/lessons/7377ece4/assignments/8cdc0e98))
- `==` and `!=`
        - Loose Equality operators
        - Intended to check if both operands are the same value regardless of type
        - Uses a system of rules to coerce operands to do check.
    - Can lead to unintended outcomes due to how it works
- `===` and `!==`
    - Strict Equality operators
    - Checks that both sides are the same type and value.
- `>`, `>=`, `<`, and `<=`
    - Works with strings and numbers

### Logical Operators ([Lesson 1: Operators](https://launchschool.com/lessons/7377ece4/assignments/8cdc0e98))
- `&&`
    - Short circuits, if the left operand is falsy, it stops there
    - Returns the operands return value that was last evaluated(left if left was falsy, right otherwise)
    - When used in a conditional is effectively true when both operands are truthy.
- `||`
    - Short circuits, if the left operand is truthy, it stops there
    - Returns the operands retun value that was last evaluated(left if left was truthy, right otherwise)
    - When used in a conditional is effectively true when one operand is truthy
- `!`
    - Unary operator
    - Returns `true` if the operand is falsy
- `!!`
    - Used to change a values truthiness to a boolean
- `??`
    - Nullish Coelescing Operator
    - Used like `||`, but only goes to the right operand when the left evaluates to `undefined` or `null`

## variable scope ([Variable Scope](https://launchschool.com/books/javascript/read/variables#variablescope)) ([Functions & Scope](https://launchschool.com/books/javascript/read/functions#functionsscope)) ([Lesson 2: Functional Scopes and Lexical Scope](https://launchschool.com/lessons/7cd4abf4/assignments/0b1349b7))
- Block scope
    - Created with each new block or function body.
        - Function bodies are not blocks, but can be treated as one
        - A block is a "block" of code inside `{}` that is not an object literal
    - `let` and `const` are scoped to the block level
- Function scope
    - Created with each new Function body
    - `var` is locally scoped at the function level
    - parameters are locally scoped to the function
- Lexical Scope
    - The source code defines the scope.
    - Where a scope is in relation to other scopes in the file is how JavaScript searches for variables.
    - JavaScript goes up the levels until it reaches the top level looking for a variable when one is used. (Bottom -> Top)
- Variable Shadowing
    - Happens when a lower scope declares a local variable with the same name as a variable in a higher scope.
    - Since JavaScript searches bottom -> top, it will find the lower scopes variable first, thus hiding the higher level scopes variable

### Hoisting ([Lesson 2: Hoisting](https://launchschool.com/lessons/7cd4abf4/assignments/510e62bb))
- JavaScript has two phases to code execution
    - Creation phase
        - Searches for declarations and makes note of them and their scopes
    - Execution phase
        - Runs code line by line
- The actions taken by the creation phase lead to a mental model called hoisting(It doesn't exactly work like hoisting describes)
- Variables and Function declarations are moved to the top of their scopes prior to execution
- `let` and `const` variables are left unset, throwing a `ReferenceError` if accessed prior to initialization
- `var` variables are initialized as `undefined` until assigned in code
- Function declarations are moved body and all above other variable declarations.
    - You can call functions prior to them being defined due to this.
- Function expressions assigned/initialized to a variable follow variable hoisting rules.

## Types ([Lesson 1: Data Types](https://launchschool.com/lessons/7377ece4/assignments/bd02b66c)) ([Lesson 2: Review: Objects vs Primitive Types](https://launchschool.com/lessons/7cd4abf4/assignments/e30099b0))
### primitive values ([Lesson 1: Primitive Values are Immutable](https://launchschool.com/lessons/7377ece4/assignments/74cfbc2a))
- Primitive values are immutable
- `Number`
    - Can be both integer and float.
    - `Infinity`
        - `1 / 0`
    - `-Infinity`
        - `1 / -0`
    - `0` and `-0`
        - Equal each other
    - `NaN`
        - `Number.isNaN`
            - method to check if a value is `NaN`
        - `NaN !== NaN`
            - Only value that is not equal to itself
- `String` ([Lesson 1: More on Strings](https://launchschool.com/lessons/7377ece4/assignments/84419ace))
    - `for of` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of))
        - Used to iterate over each element in an enumerable collection. (can also work on arrays)
    - `[]` operator
        - Used to access each individual character
        - Index starts at 0.
        - Attempting to access characters that don't exist returns `undefined`
    - `string.length` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length))
        - Returns the number of characters in the string
    - `string.charCodeAt(idx)` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt))
        - Returns the UTF-16 code for the character at `idx` index.
    - `string.includes(substring)` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes))
        - Returns whether the `string` contains `substring` (boolean)
    - `string.match(regex)` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match))
        - Searches the string for regex matches(with global flag, all the string, otherwise first match)
        - If no match is found `null` is returned
        - If `g` flag is used returns all results will be returned in an array. No capture groups will be returned.
        - if `g` flag is not used returns the first match and its related capture groups.
    - `string.repeat(times)` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat))
        - Returns a new string which is `string` repeated `times` times.
    - `string.replace(regex, replacement)` ([MDN Documentaiton](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace))
        - Returns a new string with the first match replaced with `replacement`
        - if the `g` flag is used, all matches are replaced.
        - Can use capture groups, using `$1`-`$9` to represent the captured group
    - `string.slice(start, end)` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice))
        - Returns a new string that is the substring of `string` from index `start` up to, but not including, index `end`.
        - If `end` is not given as an argument, returns the rest of the string from index `start`.
    - `string.split(separator)` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split))
        - Splits the string into an array of strings a the string `seperator`
- `undefined`
    - Means it implicitly doesn't have a value.
    - A lot of things will default to `undefined`
- `null`
    - Means it explicitly doesn't have a value.
    - Must be assigned, isn't a default.
- `boolean`
    - True or false
- ~~symbols~~ (not in course)
- ~~big integer~~ (not in course)

### Compound Data types ([Lesson 5: Mutability of Values and Objects](https://launchschool.com/lessons/79b41804/assignments/40b5852e))
- Compound Data types are mutable
- Simple `Object` ([Lesson 5: Object Properties](https://launchschool.com/lessons/79b41804/assignments/5564f6e8)) ([Lesson 5: Stepping through Object Properties](https://launchschool.com/lessons/79b41804/assignments/b88f5906))
    - Properties and mutation
        - Objects are made up of key value pairs
        - The key must be a string, if not it will be coerced into a string
        - Properties that are assigned/reassigned mutate the object
    - `[]` notation
        - `object[key]`
        - Can take an expression to dynamically access properties
        - Useful for accessing values that aren't easily accessible by `.` notation
    - `.` notation
        - `object.key`
        - Useful when the property key doesn't include invalid characters
    - `delete` operator ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete))
        - Removes a property from an object `delete object.property`
    - `for in` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in))
        - Iterates over the keys in an object
    - `Object.keys(object)` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys))
        - Returns an array of keys available to the object
    - `Object.values(object)` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values))
        - Returns an array of the values inside the object
    - `Object.entries(object)` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries))
        - Returns a nested array of the key value pairs inside the object
    - `in` operator ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in))
        - `key in object`
        - Used to tell if an object has a key (boolean)
    - `Object.assign(object1, object2)` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign))
        - Copies the properties from the second object into the first object mutating it.
        - Can take more than 2 arguments, everything from the second one on is copied into the first.
    - `Object.create(object)` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create))
        - Creates a new object using `object` as a prototype
        - Use `object.hasOwn(key)` to determine if a property is it's own or a prototypes (boolean) ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn))

- `Array` ([Lesson 4: Arrays](https://launchschool.com/lessons/e15c92bb/assignments/20dcbcab)) ([Lesson 5: Arrays and Objects](https://launchschool.com/lessons/79b41804/assignments/5dc08268)) ([Lesson 5: Arrays: What is an Element?](https://launchschool.com/lessons/79b41804/assignments/153a803b))
    - Is an Object
        - All the previous topics on objects work on arrays
    - Elements
        - Array elements are keys that are non-negative integers.
        - accessed with `[]` operator
    - `array.length` property ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length))
        - Is one more than the highest indexed element.
        - Can be larger than the number of set elements
        - Can be set, expanding or truncating the array if bigger or smaller.
        - If truncated, elements at and above the new `length` value are lost.
        - If expanded, new elements are not set, will return `undefined` if accessed, and will not appear in iteration until set. The array would be sparse.
    - `Array.isArray(object)` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray))
        - Returns if `object` is an array (boolean)
        - Use since `typeof` keyword returns `'object'` for arrays
    - `for of` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of))
        - Used to iterate over each element in an enumerable collection. (can also work on strings)
    - `forEach` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach))
        - Used to iterate over each element in an array
        - Takes a callback function as an argument, which it calls for every element in the array.
        - Returns `undefined`
    - `map` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map))
        - Used to transform an array
        - Takes a callback function as an argument and uses the return value of the callback function called on each element to create a new array
        - Returns a new array with each element transformed from the original using the callback function.
    - `filter` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter))
        - Performs selection on an array
        - Takes a callback function, whose return value is used to determine if an element is kept(return is truthy)
        - Returns a new array with only the elements that returned a truthy value from the callback function.
    - `find` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find))
        - Finds the first elements value that meets a certain criteria
        - Takes a callback function, whose return value is used to determine if we found the correct element.
        - Returns the first value that returns truthy when passed to the callback function.
    - `every` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every))
        - Tests if every element passes some test
        - Takes a callback function that is invoked on each element that should return a truthy/falsy value.
        - Returns `true` or `false`
    - `from`([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from))
        - Creates a new Array from an iterable or array-like object.
    - `indexOf` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf))
        - Takes a value/reference as an argument
        - Returns first index that has the same value/reference as the one passed
        - If it can not find an element with that value/reference, returns -1
        - Can take a second argument with index to search from.
            - If positive, searches left to right
            - If negative, searches right to left(-1 is last index)
    - `join` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join))
        - Combines each element into a string
        - Can pass a seperator as an argument, which will go between each element, by default is a `','`
    - `pop` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop))
        - Removes and returns the last element in the array
        - Permanently mutates the array
    - `push` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push))
        - Takes at least 1 argument, which it places at the end of the array
        - Permanently mutates the array
        - Returns the new `length` of the array.
    - `reduce` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce))
        - Used to "reduce" an array to one value using a callback function and an optional starting value
        - Takes a callback function with two parameters, one the accumulator, the other an element
        - Will call the callback function for every element by passing the accumulator and current element to it. The return value of the function is assigned to the accumulator.
        - Will return the accumulator after iterating over the array
    - `reverse` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse))
        - Reverses the array in place
        - Mutates the array
    - `shift` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift))
        - Like `pop`, but for the start of the array
    - `slice` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice))
        - Can be used to copy an array
        - Returns a shallow copy of a portion of an array.
        - Takes a starting index and ending index(excluded)
    - `some` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some))
        - Tests if at least one element passes a test
        - Takes a callback function, which is invoked for each element. Should return a truthy/falsy value.
        - Returns `true` or `false`
    - `sort` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort))
        - Sorts an array in place
        - Can pass a callback function to determine how it sorts
            - Takes two arguments `a` and `b`
            - If returns `>0` `a` is placed after `b`
            - If returns `<0` `a` is placed before `b`
            - if returns `===0` `a` and `b` are left in place
    - `splice` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice))
        - Used to change the content of an array by removing or replacing elements, and/or adding new elements.
        - Most easily removes elements from array `splice(start, deleteCount)`
            - `start` is what index to start at. Positive goes left to right, negative goes right to left.
            - `deleteCount` is how many elements to remove
            - Will return a new array with the removed elements.
        - Mutates original array
    - `unshift` ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift))
        - Like `push`, but for the start of the array

### type conversions/coercions ([Lesson 1: Explicit Primitive Type Coercions](https://launchschool.com/lessons/7377ece4/assignments/3899592c)) ([Lesson 1: Implicit Primitive Type Coercions](https://launchschool.com/lessons/7377ece4/assignments/3d2e392a)) ([Lesson 4: Arrays and Operators](https://launchschool.com/lessons/e15c92bb/assignments/5aed9f6f))
- `Number`
    - `Number()` constructor
    - `parseInt()`
        - second argument takes base, should always use with `10` unless you want another base.
    - `parseFloat()`
    - unary `+` operator
    - Mathematical operators
        - `+` if used with nonstring types will coerce operands into numbers
        - `-` `*` `/` `%` all coerce to numbers
- `String`
    - `String()` constructor
    - `+` concatenation operator
        - If one operand is a string, will coerce other to string
    - `.toString()`
        - Not every type has a `toString()` method, use `String()`
- boolean
    - `!!`
    - `'true' === 'true'`

### truthiness ([Truthiness](https://launchschool.com/books/javascript/read/flow_control#truthiness))
- falsy Values
    - `false`
    - `0`
    - `''`
    - `undefined`
    - `null`
    - `NaN`
- truthy values
    - Any non-falsy value

# Functions
## First class functions ([Three Ways to Define a Function](https://launchschool.com/books/javascript/read/functions#threewaystodefineafunction)) ([Lesson 2: Closures](https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745))
- First-class value or first-call object:
    - They can be assigned to a variable or an element of a data structure
    - They can be passed as an argument to a function
    - They can be returned as the return value of a function
- Basically, since functions are objects in JavaScript, we can treat them as any other value and assign them to variables, used as arguments, and returned as values to a function.

## function invocation ([Using Functions](https://launchschool.com/books/javascript/read/functions#usingfunctions)) ([Function Composition](https://launchschool.com/books/javascript/read/functions#functioncomposition)) ([Lesson 2: Function Invocation](https://launchschool.com/lessons/7cd4abf4/assignments/7c802de8))
- Functions are invoked by appending a pair of parenthesis to the function's name
- You can pass any number of arguments in between the parenthesis.
    - It depends on the function how many arguments are processed.
    - JavaScript is not strict with the number of arguments needed.
- By default all functions return `undefined`
- By giving an explicit return value through a `return` statement, something else can be returned.
- We can combine functions through function composition
    - Done by passing return value of one function as an argument to another.

## function definition ([Three Ways to Define a Function](https://launchschool.com/books/javascript/read/functions#threewaystodefineafunction)) ([Lesson 2: Nested Functions](https://launchschool.com/lessons/7cd4abf4/assignments/27dc68d7)) ([Lesson 2: Function Declaration and Function Expressions](https://launchschool.com/lessons/7cd4abf4/assignments/5cb67110))
- function declaration ([Lesson 2: Function Definition](https://launchschool.com/lessons/7cd4abf4/assignments/067955f4))
    - Happens when the `function` keyword is the first part of the statement
    - `function name(parameters) { ... }`
    - Functions name is also a variable
    - Hoisted prior to variable declarations body and all, thus can be called prior to its definition.
- function expressions
    - Happens when the `function` keyword is not the first part of the statement
    - Can be stored in a variable, passed as an argument, etc...
    - `let myFunc = function (parameters) { ... };`
    - Function can be named optionally, function name is only accessible inside the function body
- arrow functions
    - `(parameters) => expression` or `(parameters) => { ... };`
    - If single line, the expressions return value is its return value
    - Used mainly for callback functions
        - A callback function is a function passed to another invoked function, in which the invoked function calls the callback function.
    - Can be stored in a variable, passed as an argument, etc...

## Functions arguments ([Lesson 5: Working with Function Arguments](https://launchschool.com/lessons/79b41804/assignments/55096c15))
- Default parameters ([Default Parameters](https://launchschool.com/books/javascript/read/functions#defaultparametrs))
- `arguments` object
    - An "Array-like" object
    - Every function has this object implicitly
    - Contains every argument passed
    - Has a length property(which does not automatically increase/decrease and has no effect on the size of the "Array")
    - Properties are non-negtive integers as strings
    - Can not invoke Array methods itself
- `...` Rest Parameters
    - Works like the `*` operator for parameters in Ruby
    - Allows you to have a parameter that can take any number of arguments
    - `...parameter`
    - parameter will be an array
- `...` Spread operator
    - Works like the `*` operator for arguments in Ruby
    - Spreads an interable object across multiple arguments.
    - `...collection`
    - Each element is a different argument

## Closures ([Lesson 2: Closures](https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745))
- The combination of a function and the lexical environment within which that function was defined.
- Upon a function being defined, JavaScript takes note of everything in scope(addresses to variables)
- Can access variables referenced by the closure even if they are no longer in scope (Variables will show changes)
-   ```js
    function createSequence() {
        let num = 0;
        return function() {
            num += 1;
            return num;
        }
    }

    const next = createSequence();
    const anotherNext = createSequence();
    next(); // 1
    next(); // 2
    anotherNext(); // 1
    next(); // 3
    anotherNext(); // 2
    ```

## side effects ([Lesson 5: Pure Functions and Side Effects](https://launchschool.com/lessons/79b41804/assignments/88138dd5))
- A function is said to have side effects if it performs any of these actions:
    1. It reassignes any non-local variable.
    2. It mutates the value of any object referenced by a non-local variable.
    3. It reads from or writes any data entity (files, network, clock, console, etc..) that is non-local to your program.
    4. It throws an error.
    5. It calls another function that has side effects that will effect something not local to the calling function
- We say a function has side effects when it has side effects when used as intended.
    - Omitting required arguments isn't intended
    - Passing the wrong type isn't intended
    - Calling function prior to required setup(connection opening) isn't intended

## pure functions ([Lesson 5: Pure Functions and Side Effects](https://launchschool.com/lessons/79b41804/assignments/88138dd5))
- Functions that:
    1. Have no side effects
    2. Given the same set of arguments, the function always returns the same value during the function's lifetime.
        - The return value depends solely on its arguments.
- Nothing else in the program can influence a pure function during its lifetime.
- Functions can be pure for some sets of arguments, while impure for others

## console.log vs return ([Return Values](https://launchschool.com/books/javascript/read/functions#returnvalues)) ([Expressions and Return Values](https://launchschool.com/books/javascript/read/basics#expressionsandreturnvalues))
- `console.log` Logs its argument to the console and returns `undefined`
    - `console.log` does not return a usable value
- Functions by default return `undefined`
- Using the `return` statement, you can set the return value of a function to something meaningful.

## partial function application ([Lesson 2: Closures](https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745)) ([Partial Function Application](https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745))
- Is an application of closures
- Allows you to create a function, that when called applies some of another functions arguments, and allows you to supply the rest of the arguments you call the returned argument.
-   ```js
    function add(first, second) {
        return first + second;
    }

    function createAdder(firstNumber) {
        return (secondNumber) => add(firstNumber, secondNumber);
    }

    const addFive = createAdder(5);
    const addTen = createAdder(10);

    addFive(3);  // 8
    addTen(3);   // 13
    addFive(25); // 30
    addTen(25);  // 35
    ```
- Is most useful when you need to pass a function to another function, but not all the arguments will be passed by that other function. You can create a partial function application apply the arguments missing and pass the returned function to the other function.
- Is only a partial function application when the number of arguments a function takes is reduced.

# Syntax
## Expressions vs Statements ([Lesson 1: Expressions and Statements](https://launchschool.com/lessons/7377ece4/assignments/d84fdace))
- Expressions can have a value captured.
- Statements can not have a value captured.
    - Variable declaration is a statement
    - Control Statements are statements

## Control Statements ([Lesson 1: Conditionals](https://launchschool.com/lessons/7377ece4/assignments/5f7c3a20)) ([Lesson 1: Looping and Iteration](https://launchschool.com/lessons/7377ece4/assignments/a261b334))
- `if {} else if {} else {}`
- `for`
    - `for in`
        - Iterates over the keys in an object
        - `for (let key in object) { }`
    - `for of`
        - Iterates over elements in an enumerable collection
        - `for (let value of collection) { }`
- `while`
    - `do {} while`
- `switch`
    - Must break between `case`s unless you want fall-through
    - `case`
    - `default`

## strict mode vs. sloppy mode ([Modern JavaScript: Strict Mode](https://launchschool.com/gists/406ba491))
### Strict Mode
- Enabled by adding `'use strict';`
    - Can be added to the top of the file for global strict mode
    - Or at the top of a function to selectively use strict mode on a function
    - Lexically scoped
    - The `'use strict';` is a pragma.
- Eliminates some silent errors
- Prevents some code that can inhibit JavaScript's optimizations
- Prohibits using names and syntax that may conflict with future versions
- Disallows implicit global variables(variables that were assigned, but not declared)
    - Throws a `ReferenceError`
    - Helps identify misspelled names, which could become implicit global variables
- Disallows starting number > 1 and < -1 with 0
    - Numbers that start with 0 are interpretted as Octal values in sloppy mode.
    - Disallows octal literals basically
- Prevents declaring two function parameters with the same name
- Prevents using keywords as name
- prevents using `delete` operator on variable name
- Forbids binding of `eval` and `arguments` in any way
- Disables access to some properties of the `arguments` object
- Disables the `with` statement
- Prevents function declarations inside blocks
- Prevents declaring two properties with the same name in an object

### Sloppy Mode
- Allows some errors to go silent.
    - Something unintended happened, but did not throw an error
    - Runs as though nothing went wrong
- Allows a lot of bad practices just to make sure code keeps running

## JavaScript syntactic sugar ([Modern JavaScript: Syntactic Sugar](https://launchschool.com/gists/2edcf7d7))
- Concise Property Initializers
    - If you have a variable the same name as an intended property for an object literal, you can just use the variable instead of `variableName: variable`
    - ```js
      function xyzzy(foo, bar, qux) {
        return {
          foo,
          bar,
          answer: qux,
        };
      }
      ```
- Concise Methods
    - If you are defining functions inside an object for methods, you can shorten its declaration
    - ```js
      let obj = {
        foo: function() { // long form
          // do something
        },

        bar(arg1, arg2) { // concise
          // do something else with arg1 and arg2
        },
      }
      ```
- Object Destructuring
    - Like Concise Property Initializers, you can assign property values from an object to variables easier if the variable names are the same as the property names.
    - ```js
      let obj = {
        foo: "foo",
        bar: "bar",
        qux: 42,
      };

      let { foo, bar, qux } = obj;
      ```
    - Ordering in brackets is not important
    - Also works with function parameters
        - ```js
          function xyzzy({foo, bar, qux}) { ... }

          xyzzy(obj);
          ```
- Array destructuring:
    - Allows you to assign elements directly to variables if size is known and structure known
    - ```js
      let [one, two, three] = [1, 2, 3];
      let [,,ableTo,,skip] = [0, 1, 2, 3, 4];
      ```
    - Is handy for value swaps
        - ```js
          let one = 1;
          let two = 2;

          [one, two] = [two, one];

          console.log(one); // 2
          console.log(two); // 1
          ```
- Spread Syntax
    - Uses the `...` operator.
    - Spreads array elements when array is passed as an argument to a function to the available parameters.
        - ```js
          function add3(item1, item2, item3) {
            return item1 + item2 + item3;
          }

          let foo = [3, 7, 11];
          add3(...foo); // => 21
          ```
    - Allows you to turn an iteratable collection into a number of elements in a array literal as well.
        - ```js
          // Concatenate arrays
          let foo = [1, 2, 3];
          let bar = [4, 5, 6];
          let qux = [...foo, ...bar];
          qux;  // => [1, 2, 3, 4, 5, 6]
          ```
    - Also works with object properties
        - ```js
          // Merge objects
          let foo = { qux: 1, baz: 2 };
          let xyz = { baz: 3, sup: 4 };
          let obj = { ...foo, ...xyz };
          obj;  // => { qux: 1, baz: 3, sup: 4 }
          ```
- Rest Syntax
    - Uses the `...` operator
    - Like Spread syntax, but in reverse
    - Able to take the "rest" of the collection of something as its own elements
        - ```js
          let foo = [1, 2, 3, 4];
          let [ bar, ...otherStuff ] = foo;
          console.log(bar);        // 1
          console.log(otherStuff); // [2, 3, 4]
          ```
        - ```js
          let foo = {bar: 1, qux: 2, baz: 3, xyz: 4};
          let { bar, baz, ...otherStuff } = foo;
          console.log(bar);        // 1
          console.log(baz);        // 3
          console.log(otherStuff); // {qux: 2, xyz: 4}
          ```
    - Gives you a parameter that can take any number of arguments
        - ```js
          function maxItem(first, ...moreArgs) {
            let maximum = first;
            moreArgs.forEach(value => {
              if (value > maximum) {
                maximum = value;
              }
            });

            return maximum;
          }

          console.log(maxItem(2, 6, 10, 4, -3));
          ```

## Errors ([Lesson 6: Errors](https://launchschool.com/lessons/d299fc36/assignments/d52565cc)) ([Lesson 6: Catching Errors](https://launchschool.com/lessons/d299fc36/assignments/748ab030))
- `ReferenceError` Occurs when you attempt to use a variable or function that does not exist
- `TypeError` Occurs when you try to access a property on a value that does not have any properties or calling something as a function when it is not a function.
- `SyntaxError` Occurs if JavaScript can't interpret the code given (missing parenthesis, invalid syntax, trying to parse a JSON that is not JSON).
- Use Guard Clauses to avoid errors
    - Prevent edge cases
- `try { ... } catch (error) { ... } finally { ... }`
    - `try` runs until it completes or an error is thrown.
    - If an error is thrown, it goes to the `catch` block passing the error to it
    - `finally` runs whether the `try` through an error or not after the `try` and `catch` are executed.
    - Use when:
        - A built-in JavaScript Function or method can throw an Error and you need to handle or prevent that Error.
        - A simple guard clause is impossible or impractical to prevent the Error.
