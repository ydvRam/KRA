import React, { useState, useEffect } from "react";

// Parent Component
function App() {
  const [name, setName] = useState("");       // state
  const [count, setCount] = useState(0);      // state

  // useEffect
  useEffect(() => {
    console.log("Component Mounted!");
  }, []);

  return (
    <div className="text-center" py-2>
      <h2>React Fundamentals Example</h2>

      {/* Controlled Component */}
      <input
        className="px-1 py-1 border-2 rounded-md mt-3 mr-3"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <button className="border-4 bg-amber-800 text-white rounded-lg px-2 py-1 cursor-pointer" onClick={() => setCount(count + 1)}>
        Click Me
      </button>

      <p>Button clicked: {count} times</p>

      {/* Passing props */}
      <Greeting username={name} />
    </div>
  );
}

// Child Component (Functional Component)
function Greeting({ username }) {
  return <h3>Hello, {username || "Guest"} 👋</h3>;
}

export default App;