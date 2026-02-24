// call stack -->
function first() {
  second();
}                                                      // first function 

function second() {
  console.log("Hello");
}                                                     // second function 

first();                                              // call the first fn which call first and second sequencally 

// Event Loop (High-Level)
// console.log("Start");                                 // synchronous task 

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);                                                // asynchronous task 

// Promise.resolve().then(() => {                        //promise log
//   console.log("Promise");
// });

// console.log("End");                                  // synchronous task 

// let vs const --->
let fullName = "Rampratap"; //we can update the let but we cannot re-declare it
console.log(fullName);
const PI = 3.24;  //we cannot update or re-declare const
console.log(PI);
var age = 25;  //we can update and re-declare var but it is not recommended to use var
console.log(age);

// arrow function --->
const add = (a, b) => {
  return (a + b);
}
let res = add(5, 6);
console.log(res);

const multiply = (a, b) => a * b;
let res2 = multiply(3, 4);
console.log(res2)

// array methods ---->
// map
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);
// filter
const double = nums.filter(n => n > 1);
console.log(double);

// reduce 
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);
// foreach --
nums.forEach(n => console.log(n));

//  destructing -->
// object 
const user = { name: "Ramu", ages: 22 };

const { name, ages } = user;
console.log(user);

// array
const arr = [10, 20];

const [a, b] = arr;
console.log(arr);

//SPREAD OPERATOR IN JAVASCRIPT

//Using spread operator with arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log("Combined Array: " + combinedArr);

//Using spread operator with objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2 };
console.log("Combined Object: ", combinedObj);

//REST OPERATOR IN JAVASCRIPT

function sums(...numbers) {               //rest operator to accept variable number of arguments
  return numbers.reduce((acc, num) => acc + num, 0);
}

let totalSum = sums(1, 2, 3, 4, 5);
console.log("Total Sum using Rest Operator: " + totalSum);

//OPTIONAL CHAINING IN JAVASCRIPT

let users = {
  name: "Ram pratap",
  address: {
    city: "agra",
    country: "India"
  }
};

console.log("City: " + users.address?.city);          //accessing existing property
console.log("Zip Code: " + users.address?.zipCode);   //accessing non-existing property safely
console.log("Phone: " + users.contact?.phone);        //accessing non-existing nested property safely

// Error Handling
try {
  console.log(abcd);
} catch (error) {
  console.log("Error:", error.message);
}