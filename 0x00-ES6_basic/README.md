# ES6 Features

This project uses ES6, the sixth edition of the ECMAScript language standard, which introduces many significant improvements and features to JavaScript.

## Constants and Variables

- **Constants**: Declared using the `const` keyword, constants are block-scoped and cannot be reassigned.
- **Variables**: Declared using the `let` and `var` keywords, variables can be reassigned.

### Examples

```javascript
const PI = 3.14; // constant declaration
PI = 4; // error, cannot reassign a constant

let x = 10; // variable declaration
x = 20; // reassigning a variable
```

## Block-Scoped Variables

- **Let and Const**: Unlike `var`, which is function-scoped, `let` and `const` are block-scoped, meaning they are limited to the scope of the block they are defined in.

### Example

```javascript
{
  let x = 10; // block scope
  console.log(x); // 10
}
console.log(x); // error, x is not defined outside the block
```

## Arrow Functions

- **Arrow Function**: A concise syntax for functions, arrow functions inherit the scope of the surrounding code and can be used as expressions.
- **Default Function Parameters**: Allows setting default values for function parameters.

### Examples

```javascript
const add = (a, b) => a + b; // arrow function
console.log(add(2, 3)); // 5

const greet = (name = 'World') => `Hello, ${name}!`;
console.log(greet()); // Hello, World!
console.log(greet('Alice')); // Hello, Alice!
```

## Rest and Spread Parameters

- **Rest Parameters**: Allows a function to accept any number of arguments as an array.
- **Spread Syntax**: Allows expanding an array or object into a new array or object.

### Examples

```javascript
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4)); // 10

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
```

## String Templating

- **Template Literals**: A new way of creating strings using backticks (\`\) and placeholders for expressions.

### Example

```javascript
const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!
```

## Object Creation and Properties

- **Object Literals**: A concise syntax for creating objects.
- **Property Shorthand**: Allows using property names as shorthand for property values.

### Examples

```javascript
const person = { name: 'Alice', age: 30 }; // object literal
console.log(person.name); // Alice

const name = 'Alice';
const person = { name }; // property shorthand
console.log(person.name); // Alice
```

## Iterators and For-Of Loops

- **Iterators**: A way to iterate over data structures like arrays and objects.
- **For-Of Loops**: A new loop syntax that uses iterators to iterate over data structures.

### Examples

```javascript
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }

const arr = [1, 2, 3];
for (const num of arr) {
  console.log(num); // 1, 2, 3
}
```

This project takes advantage of these ES6 features to write more concise and expressive code.
```
