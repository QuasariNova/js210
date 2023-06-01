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
    - `string.slice(start, end)`
        - Returns a new string that is the substring of `string` from index `start` up to, but not including, index `end`.
        - If `end` is not given as an argument, returns the rest of the string from index `start`.
    - `string.split(separator)`
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
- `String`
    - `String()` constructor
    - `+` concatenation operator
    - `.toString()`
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
## First class functions ([Three Ways to Define a Function](https://launchschool.com/books/javascript/read/functions#threewaystodefineafunction))

## function invocation ([Using Functions](https://launchschool.com/books/javascript/read/functions#usingfunctions)) ([Function Composition](https://launchschool.com/books/javascript/read/functions#functioncomposition))

## function definition ([Three Ways to Define a Function](https://launchschool.com/books/javascript/read/functions#threewaystodefineafunction)) ([Lesson 2: Nested Functions](https://launchschool.com/lessons/7cd4abf4/assignments/27dc68d7)) ([Lesson 2: Function Declaration and Function Expressions](https://launchschool.com/lessons/7cd4abf4/assignments/5cb67110))
- function declaration ([Lesson 2: Function Definition](https://launchschool.com/lessons/7cd4abf4/assignments/067955f4))
- function expressions
- arrow functions
- function invocation ([Lesson 2: Function Invocation](https://launchschool.com/lessons/7cd4abf4/assignments/7c802de8))

## Functions arguments ([Lesson 5: Working with Function Arguments](https://launchschool.com/lessons/79b41804/assignments/55096c15))
- Default parameters ([Default Parameters](https://launchschool.com/books/javascript/read/functions#defaultparametrs))
- Rest Parameters
- `arguments` object

## Closures ([Lesson 2: Closures](https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745))

## side effects ([Lesson 5: Pure Functions and Side Effects](https://launchschool.com/lessons/79b41804/assignments/88138dd5))

## pure functions ([Lesson 5: Pure Functions and Side Effects](https://launchschool.com/lessons/79b41804/assignments/88138dd5))

## console.log vs return ([Return Values](https://launchschool.com/books/javascript/read/functions#returnvalues)) ([Expressions and Return Values](https://launchschool.com/books/javascript/read/basics#expressionsandreturnvalues))

## partial function application ([Partial Function Application](https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745))

# Syntax
## Expressions vs Statements ([Lesson 1: Expressions and Statements](https://launchschool.com/lessons/7377ece4/assignments/d84fdace))

## Control Statements ([Lesson 1: Conditionals](https://launchschool.com/lessons/7377ece4/assignments/5f7c3a20)) ([Lesson 1: Looping and Iteration](https://launchschool.com/lessons/7377ece4/assignments/a261b334))

## strict mode vs. sloppy mode ([Modern JavaScript: Strict Mode](https://launchschool.com/gists/406ba491))

## JavaScript syntactic sugar ([Modern JavaScript: Syntactic Sugar](https://launchschool.com/gists/2edcf7d7))

## Errors ([Lesson 6: Errors](https://launchschool.com/lessons/d299fc36/assignments/d52565cc)) ([Lesson 6: Catching Errors](https://launchschool.com/lessons/d299fc36/assignments/748ab030))
