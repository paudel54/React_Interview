import './App.css';
// hook useState()

import React, { useState } from 'react'

function App() {
  // destructuring the fn setter function setCount form useState hook , adding 0 as defalut value.  
  // How do you create a state in a functional component or what is the purpose of useState() methods?
  // State is like a variable which is watched by React Application if therer are any change into state React will make sure that they are Rerendered. 


  // lazy initialization if we want to load non primitive data on state
  function initialState() {
    // lazy initialization is required if you have a bigger porcess which is going to give you the initial state value and that you put in a function. then instead of writing
    //the function only do make sure you follow lazy inititializaion
    console.log('Its an expensive process', Date.now())
    return 0;
  }

  const [i, setCount] = useState(() => initialState());
  // const decreaseValue = () => {
  //   setCount(i - 1);
  // }
  const changeCounter = (op) => {
    if (op === '+') {
      setCount(i + 1);
    } else {
      setCount(i - 1);
    }

  }

  return (
    <div className="App">
      <h1>{i}</h1>
      {/* ON Click is an event */}
      {/* <button onClick={() => setCount(i + 1)}>Click</button> */}
      {/* Arrow function or return must be gurantted when we pass parameter to fn on Click Events */}
      <button onClick={() => changeCounter('+')}>Decrement</button>
      <button onClick={() => changeCounter('-')}>Increment</button>
    </div>
  );
}

export default App;
