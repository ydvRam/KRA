// Types in typescript --->

// 1. primitive data types --->

/**
 * Primitive types represent single, simple values.
 * They are immutable (cannot be changed directly) and stored by value.
 */

// a. number
let age: number = 20;
let rollNo: number = 10;
// console.log(`Age of the user is ${age} and rollNo is ${rollNo}`);

// b. string
let fName: string = "Ram";
let lname: string = "pratap";
// console.log(`Full name of user is ${fName} ${lname}`);

// c. boolean
let isActive: boolean = true;
let hasPermission = false;
// console.log(`User is ${isActive} and status of permission is ${hasPermission}`);

// d. null
let data: null = null;
let selectedUser: string | null = null;
// console.log(`Data is ${data} and selectedUser is ${selectedUser}`);

// e. undefined
let value: undefined = undefined;
let username: string | undefined;
// console.log(`Value is ${value} and username is ${username}`);

// f. symbol
let id: symbol = Symbol("id");
// console.log(id);

// g. bigint
let bigInt: bigint = 12345678901234567890n;
// console.log(`It consits big value and the value is : ${bigInt}`);



// 2. Non-Primitive (Reference) Types

/**
 * Non-primitive types represent collections or complex data structures.
 * They are stored by reference.
 */
// a. object
let user: { name: string, age: number } = {
  name: "Rampratap",
  age: 25
}

let car: { brand: string, year: number } = {
  brand: "Toyota",
  year: 2024,
}
// console.log(`Name of the user is ${user.name} and their age is ${user.age} , having ${car.brand} car which bought in ${car.year}`);

// b. array
let fruits: string[] = ["Apple", "Banana", "Orange", "Papaya", "Mango"];
let nums: number[] = [1, 2, 3, 4, 5];
// console.log(fruits,nums);

// c. tuple

/**
 * Fixed length array with fixed types, order matters here and worked like array.
 */
let identity: [string, number, string, number, string] = ["Rampratap", 25, "Agra", 7457807892, "Male"];
// console.log(`Indentity of a user --> name : ${identity[0]} , Age : ${identity[1]} , Location : ${identity[2]} , Contact No: ${identity[3]} , Gender : ${identity[4]}`);

// d. function
function users(name: string, address: string): string {
  return (`users name is ${name} address is ${address}`)
}
// console.log(users("Rampratap","Agra"));

// e. any
/**
 * Can hold any type (primitive or non-primitive) , didnt check data types .
 */
let randomValue: any = 42;
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
let status: "sucess" | "true" = "true";
let ids: string | number = 43;
// console.log(status, ids);


// Interfaces vs Types --->
/**
 *  Both are used to define the shape of data.
 */
// Interface

/**
 * An interface defines the structure of an object.
 */
interface User {
  name: string;
  age: number;
}                                                     // defines the structure 
let userS: User = {
  name: "Rampratap",
  age: 25,
}                                                     // use the structure 

// Extending Interface
interface Person {                                    // person interface
  salary: number,
  address: string,
}
interface Employee extends Person {
  name: string,
}                                                    // extends the person 
let employees: Employee = {
  name: "Rampratap",
  salary: 23000,
  address: "Agra",
}                                                    // use the interface 
// console.log(employees);

//  types -->

/**
 * A type alias is a custom name for any type (object, union, primitive, etc).
 */
type Users = {
  name: string;
  age: number;
};
let userss: Users = {
  name: "Rampratap",
  age: 25,
}
// console.log(userss);

// Typing Props (React) --->
/**
 * Typing props means defining what data a component expects.
 */
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean; // optional prop
}

function Button(props: ButtonProps): void {                           // Component function
  console.log(`Button Label: ${props.label}`);
  if (props.disabled) {
    console.log('Button is disabled');
  } else {
    props.onClick();
  }
}

Button({                                               // Using the Button component
  label: 'Submit',
  onClick: () => console.log('Button clicked!'),
});

Button({                                                 // Using the Button component with optional prop
  label: 'Cancel',
  onClick: () => console.log('Button clicked!'),
  disabled: false,
});


//Typing State (React)
/**
 * Typing state ensures state values follow a specific type.
 */
interface State {
  count: number;
  text: string;
}

let appState: State = {
  count: 0,
  text: 'Hello, TypeScript!'
};

function incrementCount(state: State): State {
  return { ...state, count: state.count + 1 };
}

appState = incrementCount(appState);
console.log(`Count: ${appState.count}, Text: ${appState.text}`);

// API RESPONSES IN TYPESCRIPT
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
interface Userss {
  id: number,
  name: string,
  mail: string,
}
function fetchUser(): ApiResponse<Userss> {
  return {
    success: true,
    data: {
      name: "rampratap",
      mail: "yadav@gmail.com",
      id: 10,
    },
    message: 'good to go',
  }
}
let res = fetchUser();
// console.log(res)

// Avoiding any --->
/**
 * any disables type checking.
 */
let datas: any = 10;
datas = "hello";
datas = {};


/**
 * Use unknown Instead
 */
let values: unknown = "hello";

if (typeof values === "string") {
  console.log(values.toUpperCase());
}
