import Product from "./components/Product";
import "./App.css";
import { useState } from "react";

function App() {
  //  | is a pipe that signifies value can be of number or String.
  // const [counter, setCounter] = useState<number | string>("Paradise");
  const [counter, setCounter] = useState<number>(1);
  // state for inputes or onChnage events.
  const [txt, setTxt] = useState<string>("");

  const btnHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCounter(counter + 1);
  };

  // Typescript of input handler
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTxt(e.target.value);
  };

  return (
    <div className="App">
      <Product pCode={1} pName="Apple" qty={7} />
      <hr />
      <h1>{counter}</h1>
      {/* if button is modified to input then there would be type error that TypeScript handles.  */}
      <button onClick={btnHandler}>Increment</button>
      <hr />
      <p>{txt}</p>
      <hr />
      <input type="text" onChange={inputChangeHandler} />
    </div>
  );
}

export default App;
