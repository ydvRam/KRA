//  1️⃣ Callbacks
/**
 * A callback is a function passed into another function that runs later.
 */
// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("data fetched");
//     callback()
//   }, 1000)
// }
// fetchData(() => {
//   console.log("processing data...");
// })

// ❌ Callback Hell (Problem)
// setTimeout(() => {
//   console.log("Step 1");

//   setTimeout(() => {
//     console.log("Step 2");

//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);

//   }, 1000);

// }, 1000);

// 2️⃣ Promises
// A Promise represents a value that will be available in the future.
// creating promise
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;

//       if (success) {
//         resolve("Data fetched successfully");
//       } else {
//         reject("Error fetching data");
//       }
//     }, 1000);
//   });
// }

// // using promise
// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 3️⃣ Promise Chaining
// Instead of nesting callbacks, we chain .then().
// function step1() {
//   return Promise.resolve("Step 1 done");
// }

// function step2() {
//   return Promise.resolve("Step 2 done");
// }

// step1()
//   .then((res) => {
//     console.log(res);
//     return step2();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// 4️⃣ async / await (Modern & Clean Way)
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Ramu", age: 25 });
    }, 1000);
  });
}

async function getUser() {
  const user = await fetchUser();
  console.log(user);
}

getUser();

// 5️⃣ Error Handling with try/catch
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error occurred:", error);
  }
}
// 🔥 Express Real Example
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 6️⃣ Promise.all (Parallel Execution)
// Used when you want multiple async operations to run simultaneously.
function fetchUsers() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Users fetched"), 1000)
  );
}

function fetchBooks() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Books fetched"), 1000)
  );
}

async function getAllData() {
  const results = await Promise.all([
    fetchUsers(),
    fetchBooks()
  ]);

  console.log(results);
}

getAllData();

// 7️⃣ Promise.allSettled
const results = await Promise.allSettled([
  fetchUsers(),
  fetchBooks()
]);

// 🧠 Real Backend Use Case (MongoDB Example)
app.get("/dashboard", async (req, res) => {
  try {
    const [users, books] = await Promise.all([
      User.countDocuments(),
      Book.countDocuments()
    ]);

    res.json({ users, books });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});