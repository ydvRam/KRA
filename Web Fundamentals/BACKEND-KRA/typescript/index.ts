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
// let userS: User = {
//   name: "Rampratap",
//   age: 25,
// }                                                     // use the structure 

// Extending Interface
interface Person {                                    // person interface
  salary: number,
  address: string,
}
interface Employee extends Person {
  name: string,
}                                                    // extends the person 
// let employees: Employee = {
//   name: "Rampratap",
//   salary: 23000,
//   address: "Agra",
// }                                                    // use the interface 
// console.log(employees);

//  types -->

/**
 * A type alias is a custom name for any type (object, union, primitive, etc).
 */
type Users = {
  name: string;
  age: number;
};
// let userss: Users = {
//   name: "Rampratap",
//   age: 25,
// }
// console.log(userss);

// 3️⃣ Classes
class User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

// 4️⃣ Generics
/**
 * Generics allow reusable components.
 */

function identity(value: string): string {     // only works for string
  return value;
}


// function identity<T>(value: T): T {
//   return value;
// }
/**
 * identity<string>("Hello");
 * identity<number>(123);
 */

//5️⃣ Utility Types
/**
 * TypeScript provides built-in helpers.
 */

// Partial<T>
// Makes all properties optional.
interface User {
  id: number;
  name: string;
}

type UpdateUser = Partial<User>;

const update: UpdateUser = {
  name: "Updated Name",                 // perfect for PATCH APIs
};
//6️⃣ Enums
// numeric ENUMs
enum Roles {
  Admin,
  User,
  Guest,
}

// String Enum
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

// 7️⃣ Decorators
/**
 * Decorators are special functions that add metadata to:
 * Classes
 * Methods
 * Properties
 * Parameters
 * They are heavily used in frameworks like NestJS.
 */

// class decorator
function Logger(constructor: Function) {
  console.log("Class created:", constructor.name);
}

@Logger
class UserService {}