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
const fs = require("fs");
fs.readFile("file.txt", (err, data) => {
  console.log(data.toString())
});
console.log("Done");

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
setTimeout(() => {
  console.log("Timer");
}, 0);
console.log("Hello");

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
  console.log("Immediate");
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

