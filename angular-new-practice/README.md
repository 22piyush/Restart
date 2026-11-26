
## What is the difference between Primitive and Reference Types in JavaScript?
In JavaScript, data types are divided into Primitive Types and Reference Types.

Primitive types store individual values. When we assign a primitive variable to another variable, JavaScript copies the actual value. Changes to one variable do not affect the other.

Reference types are objects such as arrays, objects, and functions. When we assign one reference variable to another, the reference is copied, so both variables point to the same object in memory. Changes to the shared object are visible through both variables.

## Is JavaScript synchronous or asynchronous?
JavaScript is a synchronous, single-threaded programming language, which means it executes one task at a time, line by line, in a specific order.

However, JavaScript also supports asynchronous operations using mechanisms like callbacks, Promises, and async/await.

For example, when we make an API call, JavaScript doesn't block the execution of the remaining code while waiting for the API response. It handles asynchronous operations using the Event Loop, Callback Queue, and Microtask Queue.


## 1. What is a Closure in JavaScript?

**Answer:**

A closure is a feature in JavaScript where an inner function remembers and can access variables from its outer function, even after the outer function has finished executing.

In simple words, a closure allows a function to remember the variables of its parent function.

**Example:**

```
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const result = outer();

result(); // 1
result(); // 2
result(); // 3
```

**Explanation:**

- The `outer()` function creates a variable called `count`.
- The `inner()` function accesses and updates the `count` variable.
- The `outer()` function returns the `inner()` function.
- Even after `outer()` finishes execution, `inner()` remembers the `count` variable.

**Interview Point:** Closures are commonly used for data privacy, maintaining state, and creating function factories.

---

## 2. What is the `this` keyword in JavaScript?

**Answer:**

The `this` keyword in JavaScript refers to the object that is executing or calling the current function.

In simple words, `this` tells us which object is currently calling the function.

The value of `this` depends on how a function is called.

**Example:**

```
const user = {
    name: "Piyush",

    greet: function() {
        console.log(this.name);
    }
};

user.greet(); // Piyush
```

**Explanation:**

- Here, `user` is an object.
- The `greet()` function is called using `user.greet()`.
- Therefore, `this` refers to the `user` object.
- `this.name` accesses the `name` property of the `user` object.

**Interview Point:** In a regular function, the value of `this` depends on how the function is called, not where it is defined.

---

## 3. How does `this` behave in Arrow Functions?

**Answer:**

Arrow functions do not have their own `this` keyword. Instead, they inherit `this` from their surrounding (parent) scope.

In simple words, an arrow function uses the `this` value of the place where it is created.

**Example:**

```
const user = {
    name: "Piyush",

    greet: function() {
        const inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

user.greet(); // Piyush
```

**Explanation:**

- Here, `greet()` is a regular function called using `user.greet()`.
- Therefore, `this` inside `greet()` refers to the `user` object.
- The `inner()` function is an arrow function.
- Arrow functions do not create their own `this`.
- So, `inner()` inherits `this` from the `greet()` function.

That's why the output is `Piyush`.

**Interview Point:** Arrow functions do not have their own `this`, `arguments`, or `prototype`. They inherit `this` from their surrounding scope.

---

## 4. What is Function Currying in JavaScript?

**Answer:**

Function currying is a technique in JavaScript where we convert a function that takes multiple arguments into a sequence of functions, where each function takes one argument at a time.

In simple words, instead of passing all arguments at once, we pass one argument at a time.

**Example:**

```
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30)); // 60
```

**Explanation:**

- The `add()` function takes the first argument `a`.
- It returns another function that takes the second argument `b`.
- That function returns another function that takes the third argument `c`.
- Finally, it adds all three values and returns the result.

**Interview Point:** Currying helps in function reusability, creating reusable functions, and passing arguments step by step.

---

## 5. What is Function Composition in JavaScript?

**Answer:**

Function composition is a technique in JavaScript where we combine two or more functions to create a new function.

The output of one function becomes the input of another function.

In simple words, one function's output is passed to another function as input.

**Example:**

```
function multiply(num) {
    return num * 2;
}

function add(num) {
    return num + 5;
}

function compose(num) {
    return add(multiply(num));
}

console.log(compose(10)); // 25
```

**Explanation:**

- First, `compose(10)` is called.
- The `multiply()` function executes first and returns `20`.
- Then, the result `20` is passed to the `add()` function.
- The `add()` function adds `5` and returns `25`.

**Interview Point:** Function composition helps in creating reusable, smaller, and modular functions by combining multiple functions.

---

## 6. What is Memoization in JavaScript?

**Answer:**

Memoization is an optimization technique in JavaScript where we store the results of previously calculated function calls and reuse them when the same inputs are provided again.

In simple words, memoization avoids repeating the same calculation by remembering previously calculated results.

**Example:**

```
function memoizedAdd() {
    let cache = {};

    return function(num) {
        if (num in cache) {
            console.log("From Cache");
            return cache[num];
        }

        console.log("Calculating...");
        cache[num] = num + 10;

        return cache[num];
    };
}

const add = memoizedAdd();

console.log(add(5)); // Calculating... 15
console.log(add(5)); // From Cache 15
console.log(add(10)); // Calculating... 20
```

**Explanation:**

- The `memoizedAdd()` function creates an empty object called `cache`.
- When `add(5)` is called for the first time, the result `15` is calculated and stored in the cache.
- When `add(5)` is called again, JavaScript finds the result in the cache instead of calculating it again.
- When `add(10)` is called, it calculates and stores a new result.

**Interview Point:** Memoization improves performance by avoiding repeated calculations, especially in expensive operations and recursive functions.

---

## QUICK INTERVIEW REVISION

| Concept               | Remember in simple words                                 |
| --------------------- | -------------------------------------------------------- |
| Closure               | A function remembers its outer variables.                |
| `this`                | Refers to the object based on how a function is called.  |
| Arrow Function `this` | Inherits `this` from its surrounding scope.              |
| Currying              | Passing arguments one at a time.                         |
| Composition           | Combining functions; one output becomes another input.   |
| Memoization           | Storing previous results to avoid repeated calculations. |
