// Worker Thread Example
// const { parentPort } = require("worker_threads");

// function heavyTask() {
//   let sum = 0;

//   for (let i = 0; i < 1e9; i++) {
//     sum += i;
//   }

//   return sum;
// }

// const result = heavyTask();


// 
// parentPort.postMessage(result);

const { parentPort } = require("worker_threads");

parentPort.on("message", (number) => {
  let result = number * 2;
  parentPort.postMessage(result);

});