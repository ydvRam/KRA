/**
 * Node.js is a JavaScript runtime environment that allows you to run JavaScript outside the browser, mainly on  the   server.
 * Node.js follows:
   Single-Threaded + Event-Driven + Non-Blocking I/O Architecture
 */

// 1️⃣ Single-Threaded Model -->
/**
 * Node.js uses one main thread to handle requests.
 * That means:
 * Only one call stack
 * One piece of code executes at a time
 */

// 2️⃣ Blocking vs Non-Blocking Example -->

// ❌ Blocking (Synchronous)
// const fs = require("fs");
// const data = fs.readFileSync("file.txt");
// console.log(data.toString());
// console.log("done");

// ✅ Non-Blocking (Asynchronous)
// const fs = require("fs");
// fs.readFile("file.txt", (err, data) => {
//   console.log(data.toString())
// });
// console.log("Done");

// 🔄 Event Loop
/**
 * The Event Loop continuously checks:
 * Is Call Stack empty?
   If yes → Execute next callback
 */

//  🧠 Event Loop Phases -->
// 1️⃣ Timers Phase
/**
 * Executes:
 * setTimeout()
 * setInterval()
 */
// setTimeout(() => {
//   console.log("Timer");
// }, 0);
// console.log("Hello");

// 2️⃣ I/O Callbacks Phase
/**
 * Handles:Some system-level I/O callbacks
 * Network errors
 * File system callbacks
 */
// fs.readFile("file.txt", callback);

// 3️⃣ Poll Phase
/**
 * This is where:
 * Most I/O callbacks are executed
 * Node waits for new I/O events
 * If nothing to do:
 * It may wait here
 * Or move to next phase
 */

// 4️⃣ Check Phase
/**
 * Executes:
 * setImmediate()
 */
setImmediate(() => {
  // console.log("Immediate");
});

// 🧵 Concurrency vs Parallelism
/**
 * 🔁 Concurrency
 * Handling multiple tasks at the same time (but not exactly executing at same moment)
 */

/**
 * ⚡ Parallelism
 * Executing multiple tasks literally at same time using multiple CPU cores.
 */


// 1. Node.js Events (Event Driven Architecture)

/**
 * Node.js follows an event-driven architecture.
 * Objects can emit events, and other parts of the application can listen to them.
 * This is implemented using the EventEmitter class.
 */
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// listener
eventEmitter.on("userRegistered", (user) => {
  console.log(`Send welcome email to ${user.email}`);
});

// emit event
eventEmitter.emit("userRegistered", {
  name: "Ramu",
  email: "ramu@gmail.com"
});

// Multiple Listeners
eventEmitter.on("orderPlaced", (order) => {
  console.log("Send confirmation email");
});

eventEmitter.on("orderPlaced", (order) => {
  console.log("Update inventory");
});

eventEmitter.emit("orderPlaced", { id: 101 });

// 2. EventEmitter2
/**
 * EventEmitter2 is an improved version of Node's EventEmitter.
 * Features:
 * Wildcard events
 * Namespaces
 * Async listeners
 * More performance
 */

const { EventEmitter2 } = require("eventemitter2");

const emitter = new EventEmitter2();

emitter.on("user.created", (user) => {
  console.log("Send welcome email to", user.name);
});

emitter.emit("user.created", { name: "Ramu" });

// Wildcard Events
// emitter.on("user.*", () => {
//   console.log("User related event triggered");
// });

// emitter.emit("user.created");
// emitter.emit("user.deleted");

// 3. CPU Intensive Tasks Proble
/**
 * Node.js runs on single thread.
 * If you run a heavy CPU task, it blocks the event loop.
 */

function heavyTask() {
  let sum = 0;

  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }

  return sum;
}

console.log("Start");
heavyTask();
console.log("End");

// 4. Worker Threads
/**
 * To solve this, Node.js provides worker_threads.
 * Worker threads allow running CPU intensive tasks in parallel threads.
 */

// const { Worker } = require("worker_threads");

// console.log("Main thread start");

// const worker = new Worker("./worker.js");

// worker.on("message", (data) => {
//   console.log("Result from worker:", data);
// });

// worker.on("error", (err) => {
//   console.log("Worker error", err);
// });

// console.log("Main thread continues...");                   // Main thread did not block.

// 6. Message Passing Between Threads
/**
 * Threads communicate using message passing.
 * Main thread → Worker
 * Worker → Main thread
 */

const { Worker } = require("worker_threads");

const worker = new Worker("./worker.js");

worker.postMessage(10);

worker.on("message", (result) => {
  console.log("Result:", result);
});