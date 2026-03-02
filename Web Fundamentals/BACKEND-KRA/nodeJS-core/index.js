// 1. fs (File System Module) --->
const fs = require("fs");

// Writing to a file
fs.writeFile("example.txt", "Hello Node.js!", (err) => {
  if (err) throw err;
  console.log("File written successfully.");

  // Reading the same file
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
  });
});

// 2. http (HTTP Module)
/**
 * The http module is used to create web servers and handle HTTP requests and responses without frameworks like Express.
 */
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js HTTP server!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// 3. path (Path Module)
/**
 * The path module helps manipulate file and directory paths in a cross-platform way (works on Windows/Linux/Mac).
 */
const path = require("path");

const filePath = path.join(__dirname, "data", "example.txt");
console.log("Joined path:", filePath);

console.log("Directory name:", path.dirname(filePath));
console.log("Base name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));

// 4. streams (Streams Module)
/**
 * Streams let you read or write data piece by piece instead of loading the entire file into memory. Very useful for large files or real-time data.
 */

const fs = require("fs");

const readStream = fs.createReadStream("example.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("Chunk received:", chunk);
});

readStream.on("end", () => {
  console.log("Finished reading file.");
});

// 5. buffers (Buffer Module)
/**
 * Buffers are used to handle raw binary data in Node.js. Useful when working with streams, files, or network protocols.
 */
// From string
const buffer1 = Buffer.from("Hello");

// Allocate memory
const buffer2 = Buffer.alloc(10);

// From array
const buffer3 = Buffer.from([1, 2, 3]);

console.log(buffer1.toString()); // Hello
console.log(buffer3); // <Buffer 01 02 03>

//6. crypto (Cryptography Module)
/**
 * The crypto module allows secure operations like hashing, encryption, and key generation.
 */

// Example: Hashing a Password
const crypto = require("crypto");

const password = "mySecret123";

// Create a hash using SHA-256
const hash = crypto.createHash("sha256").update(password).digest("hex");

console.log("Hashed password:", hash);

// Example: Generating a Random Token
const token = crypto.randomBytes(16).toString("hex");
console.log("Random token:", token);

