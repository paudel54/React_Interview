import Product from "./components/Product";
import "./App.css";
import { useState } from "react";

function App() {
  //  | is a pipe that signifies value can be of number or String.
  const [counter, setCounter] = useState<number | string>("Paradise");

  return (
    <div className="App">
      <Product pCode={1} pName="Apple" qty={7} />
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
