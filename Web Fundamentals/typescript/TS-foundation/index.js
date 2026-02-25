"use strict";
// Types in typescript --->
Object.defineProperty(exports, "__esModule", { value: true });
// 1. primitive data types --->
/**
 * Primitive types represent single, simple values.
 * They are immutable (cannot be changed directly) and stored by value.
 */
// a. number
let age = 20;
let rollNo = 10;
// console.log(`Age of the user is ${age} and rollNo is ${rollNo}`);
// b. string
let fName = "Ram";
let lname = "pratap";
// console.log(`Full name of user is ${fName} ${lname}`);
// c. boolean
let isActive = true;
let hasPermission = false;
// console.log(`User is ${isActive} and status of permission is ${hasPermission}`);
// d. null
let data = null;
let selectedUser = null;
// console.log(`Data is ${data} and selectedUser is ${selectedUser}`);
// e. undefined
let value = undefined;
let username;
// console.log(`Value is ${value} and username is ${username}`);
// f. symbol
let id = Symbol("id");
// console.log(id);
// g. bigint
let bigInt = 12345678901234567890n;
// console.log(`It consits big value and the value is : ${bigInt}`);
// 2. Non-Primitive (Reference) Types
/**
 * Non-primitive types represent collections or complex data structures.
 * They are stored by reference.
 */
// a. object
let user = {
    name: "Rampratap",
    age: 25
};
let car = {
    brand: "Toyota",
    year: 2024,
};
// console.log(`Name of the user is ${user.name} and their age is ${user.age} , having ${car.brand} car which bought in ${car.year}`);
// b. array
let fruits = ["Apple", "Banana", "Orange", "Papaya", "Mango"];
let nums = [1, 2, 3, 4, 5];
// console.log(fruits,nums);
// c. tuple
/**
 * Fixed length array with fixed types, order matters here and worked like array.
 */
let identity = ["Rampratap", 25, "Agra", 7457807892, "Male"];
// console.log(`Indentity of a user --> name : ${identity[0]} , Age : ${identity[1]} , Location : ${identity[2]} , Contact No: ${identity[3]} , Gender : ${identity[4]}`);
// d. function
function users(name, address) {
    return (`users name is ${name} address is ${address}`);
}
// console.log(users("Rampratap","Agra"));
// e. any
/**
 * Can hold any type (primitive or non-primitive) , didnt check data types .
 */
let randomValue = 42;
randomValue = 'Now I am a string';
randomValue = true;
// console.log(randomValue);
// f. unknown (Special Safe Type)
/**
 * Using unknown type instead of any helps in type safety
 * Safer alternative to any , check type
 */
// g. union type(Type Combination)
/**
 * Allows multiple types.
 */
let status = "true";
let ids = 43;
let userS = {
    name: "Rampratap",
    age: 25,
}; // use the structure 
let employees = {
    name: "Rampratap",
    salary: 23000,
    address: "Agra",
}; // use the interface 
let userss = {
    name: "Rampratap",
    age: 25,
};
function Button(props) {
    console.log(`Button Label: ${props.label}`);
    if (props.disabled) {
        console.log('Button is disabled');
    }
    else {
        props.onClick();
    }
}
Button({
    label: 'Submit',
    onClick: () => console.log('Button clicked!'),
});
Button({
    label: 'Cancel',
    onClick: () => console.log('Button clicked!'),
    disabled: false,
});
let appState = {
    count: 0,
    text: 'Hello, TypeScript!'
};
function incrementCount(state) {
    return { ...state, count: state.count + 1 };
}
appState = incrementCount(appState);
console.log(`Count: ${appState.count}, Text: ${appState.text}`);
function fetchUser() {
    return {
        success: true,
        data: {
            name: "rampratap",
            mail: "yadav@gmail.com",
            id: 10,
        },
        message: 'good to go',
    };
}
let res = fetchUser();
// console.log(res)
// Avoiding any --->
/**
 * any disables type checking.
 */
let datas = 10;
datas = "hello";
datas = {};
/**
 * Use unknown Instead
 */
let values = "hello";
if (typeof values === "string") {
    console.log(values.toUpperCase());
}
//# sourceMappingURL=index.js.map