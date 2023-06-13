import Product from "./components/Product";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Product pCode={1} pName="Apple" qty={7} />
    </div>
  );
}

export default App;
