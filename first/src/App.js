import React, { useState, useEffect } from "react";


let count = 0;
export default function App() {
  const [cnt, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  // Use effect is called everytime there is a re-render
  useEffect(() => {
    console.log('Effects called ... ' + count++);
  }, [cnt])

  return (
    <div>
      <h1>{cnt + '-' + flag.toString()}</h1>
      <button onClick={() => setCount(cnt + 1)}>Increment</button>
      <button onClick={() => setFlag(!flag)}>Toggle</button>
    </div>
  );
}

