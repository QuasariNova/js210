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
- `Number`
    - `Infinity`
    - `-Infinity`
    - `NaN`
        - `Number.isNaN`
        - `NaN !== NaN`
- `String` ([Lesson 1: More on Strings](https://launchschool.com/lessons/7377ece4/assignments/84419ace))
- `undefined`
- `null`
- `boolean`
- ~~symbols~~ (not in course)
- ~~big integer~~ (not in course)

### Compound Data types ([Lesson 5: Mutability of Values and Objects](https://launchschool.com/lessons/79b41804/assignments/40b5852e))
- Simple `Object` ([Lesson 5: Object Properties](https://launchschool.com/lessons/79b41804/assignments/5564f6e8)) ([Lesson 5: Stepping through Object Properties](https://launchschool.com/lessons/79b41804/assignments/b88f5906))
    - Properties and mutation
    - `[]` notation
    - `.` notation
- `Array` ([Lesson 4: Arrays](https://launchschool.com/lessons/e15c92bb/assignments/20dcbcab)) ([Lesson 5: Arrays and Objects](https://launchschool.com/lessons/79b41804/assignments/5dc08268)) ([Lesson 5: Arrays: What is an Element?](https://launchschool.com/lessons/79b41804/assignments/153a803b))
    - Is an Object
    - Elements
    - `Array.isArray`
    - `forEach`
    - `map`
    - `filter`
    - `find`

### type conversions/coercions ([Lesson 1: Explicit Primitive Type Coercions](https://launchschool.com/lessons/7377ece4/assignments/3899592c)) ([Lesson 1: Implicit Primitive Type Coercions](https://launchschool.com/lessons/7377ece4/assignments/3d2e392a)) ([Lesson 4: Arrays and Operators](https://launchschool.com/lessons/e15c92bb/assignments/5aed9f6f))
- `Number`
- `String`
- boolean

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
