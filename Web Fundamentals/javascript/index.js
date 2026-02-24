// js variables -->
// let fullName = "Rampratap"; //we can update the let but we cannot re-declare it
// console.log(fullName);
// const PI = 3.24;  //we cannot update or re-declare const
// console.log(PI);
// var age = 25;  //we can update and re-declare var but it is not recommended to use var
// console.log(age);

// // data types -->
// // String
// let color = "Yellow";
// let lastName = "Johnson";
// console.log(color, lastName);
// // Number
// let length = 16;
// let weight = 7.5;
// console.log(length, weight)
// // BigInt
// var x = 1234567890123456789012345n;
// var y = BigInt(1234567890123456789012345);
// console.log(x, y);
// // Boolean
// var x = true;
// var y = false;

// // Object
// const person = { firstName: "John", lastName: "Doe" };
// console.log(person);
// // Array object
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);
// // Date object
// const date = new Date("2022-03-25");
// console.log(date);
// // Undefined
// var x;
// var y;
// console.log(x, y);
// // Null
// var x = null;
// var y = null;
// console.log(x, y);
// // Symbol
// const value = Symbol();
// const valueY = Symbol();
// console.log(value, valueY);

// Functions--->
function hello() {
  console.log("Hello Reader");
}
hello(); // function calling

function greeting(msg) {
  console.log(msg);
}
greeting("Hello from myside"); // function with parameter

const sum = (a, b) => {
  console.log(a + b);
}
sum(4, 5);  // arrow function

//  loops in js -->
//  for loop 
for (let i = 0; i < 5; i++) {
  console.log('The value of i is ', i);
}
// while loop
let j = 0;
while (j < 5) {
  console.log("The value of j is ", j);
  j++;
}
// do while loop
let k = 0;
do {
  console.log("The value of k is: " + k);
  k++;
} while (k < 5);

// Arrays in javascript -->
let fruits = ['apple', 'mango', 'orange', 'guava', 'pineapple'];
console.log(fruits);
for (let i = 0; i < fruits.length; i++) {
  console.log('fruit at index ', i, "is :", fruits[i]);
}
// Adding Array Elements
fruits.push('graphes');
console.log(fruits);

// objects in javascript -->
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};  // simple object creation
console.log(car);

//JavaScript Object Methods
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName()); // acessing the js object.

// this in an Object Method
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person2);  //When used inside an object method, this refers to the object.

// DOM manipulation in javascript --->
let para = document.getElementById('para');
para.innerText = "Hello from Ram";
para.style.color = "blue";

// Event listner in js
let count = 0;
let button = document.getElementById('btn'); // get the button element 
let counter = document.getElementById('counter');  // get the counter element 
button.addEventListener('click', () => {           // add click event listner 
  count++;                                         // increament count value after clicking button 
  counter.textContent = `Counter is ${count}`;     // dispalying the counter value
});
