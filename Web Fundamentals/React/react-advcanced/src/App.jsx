import React, { useState, useMemo, useCallback, useRef } from "react";

// Child Component
const CounterDisplay = React.memo(({ count, increment }) => {
  console.log("CounterDisplay Rendered");
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // useRef
  const inputRef = useRef(null);

  // Expensive calculation
  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return count * 1000;
  }, [count]);

  // useCallback
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Advanced React Example</h1>

      {/* Lifting State */}
      {show && (
        <CounterDisplay count={count} increment={increment} />
      )}

      <p>Expensive Value: {expensiveValue}</p>

      <button onClick={() => setShow(!show)}>
        Toggle Counter
      </button>

      {/* useRef */}
      <br /><br />
      <input ref={inputRef} placeholder="Focus me" />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}

export default App;