// 1. Classes (Object Blueprint)
/**
 * A class is a blueprint used to create objects with properties and methods.
 */

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const user1 = new User("Ramu", 22);

// console.log(user1.greet());

//2. Array Methods
/**
 * 2. Array Methods
 */
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

// console.log(doubled);

// 3. String Methods
/**
 * JavaScript provides built-in string functions.
 */
const message = "Learning JavaScript";

// console.log(message.includes("Java"));

// 4. Object Methods
/**
 * Objects store key-value pairs and provide useful methods.
 */
const user = {
  name: "Ramu",
  age: 22,
  city: "Mumbai"
};

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// 5. Spread Operator (...)
/**
 * Used to copy or merge arrays/objects.
 */
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];

// console.log(merged);

// Also used for copying objects
const users = { name: "Ramu" };
const newUser = { ...users, age: 22 };
// console.log(newUser);

// 6. Destructuring
/**
 * Extract values from arrays or objects.
 */
const users1 = {
  name: "Ramu",
  age: 25
};

const { name, age } = users1;

// console.log(name, age);

// Array Destructuring
const colors = ["red", "blue", "green"];
const [first, second] = colors;

// console.log(first);

// 7. Template Literals
/**
 * Used for string interpolation.
 */
const names = "Ramu";
const ages = 22;

const messages = `My name is ${names} and I am ${ages} years old`;

// console.log(messages);

// 8. Arrow Functions
/**
 * Short syntax for writing functions.
 */

const add = (a, b) => {
  return a + b;
};

// console.log(add(5, 3));

// 9. Optional Chaining (?.)
/**
 * Prevents errors when accessing nested properties.
 */
const userS = {
  name: "Ramu",
  address: {
    city: "Mumbai"
  }
};

// console.log(userS.address?.city);

// 10. Nullish Coalescing (??)
/**
 * Provides a default value when variable is null or undefined.
 */

const username = null;
const displayName = username ?? "Guest";

// console.log(displayName);

// examples of all

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price ?? 0;
  }

  info() {
    return `Product: ${this.name}, Price: ${this.price}`;
  }
}

const products = [
  new Product("Laptop", 50000),
  new Product("Mouse", 500)
];

const namess = products.map((p) => p.name);

console.log(namess);