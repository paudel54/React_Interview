import './App.css';
// hook useState()
// The import of React is not Required for executing JSX this is the beauty of jsx transform earlier was different
import React, { useState } from 'react'

function App() {
  // destructuring the fn setter function setCount form useState hook , adding 0 as defalut value.  
  // How do you create a state in a functional component or what is the purpose of useState() methods?
  // State is like a variable which is watched by React Application if therer are any change into state React will make sure that they are Rerendered. 


  // lazy initialization if we want to load non primitive data on state
  // function initialState() {
  //   // lazy initialization is required if you have a bigger porcess which is going to give you the initial state value and that you put in a function. then instead of writing
  //   //the function only do make sure you follow lazy inititializaion
  //   console.log('Its an expensive process', Date.now())
  //   return 0;
  // }

  // const [i, setCount] = useState(() => initialState(0));
  // const [flag, setFlag] = useState(true);
  // Use State with Object Literals. 
  const [sObj, setCount] = useState({
    cnt: 0,
    mFlag: true
  });


  // const decreaseValue = () => {
  //   setCount(i - 1);
  // }
  const changeCounter = (op) => {
    let tC = sObj.cnt;
    if (op === '+') {
      // Use of Sprea operator is creating a new space and override if any changes to value
      tC++;
      setCount({ ...sObj, cnt: tC });
    } else {
      tC--;
      setCount({ ...sObj, cnt: tC });
    }
  }

  // css for inline styling with object Literals
  const btnStyle = {
    width: "150px",
    height: "100px",
    color: "blueviolet",
    fontSize: "25",
  }
  let message = <h1>Hello JSX</h1>
  let a = 5;
  let b = 2;
  // behind the scene Jsx is created with React.createElement
  let jsx = React.createElement(
    'Namaste',
    { style: { color: 'red' } },
    'GUYS I did it'
  )

  return (
    <div className="App">
      <h1>Counter{sObj.cnt}</h1>
      {/* ON Click is an event */}
      {/* <button onClick={() => setCount(i + 1)}>Click</button> */}
      {/* Arrow function or return must be gurantted when we pass parameter to fn on Click Events */}
      <button className='cB' onClick={() => changeCounter('+')}>Increment</button>
      <button style={btnStyle} onClick={() => changeCounter('-')}>Decrement</button>
      {message}
      {`The total Sum is ${a + b}`}
      {jsx}
      <div>
        {sObj.mFlag.toString()}
        {/* Creatting toggle  */}
        <button onClick={() => setCount({ ...sObj, mFlag: !sObj.mFlag })}>Toggle</button>
      </div>
    </div>
  );
}

export default App;
