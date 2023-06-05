import './App.css';
// hook useState()

import React, { useState } from 'react'

function App() {
  // destructuring the fn setter function setCount form useState hook , adding 0 as defalut value.  
  const [i, setCount] = useState(0);
  // let i = 0;
  const addValue = () => {
    setCount(i + 1);
    console.log(i);
  }
  return (
    <div className="App">
      <h1>{i}</h1>
      <button onClick={addValue}>Click</button>
    </div>
  );
}

export default App;
