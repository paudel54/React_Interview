import './App.css';
import { useCallback, useState } from 'react';
// Rendering the collection of list in React with map() fn. 
function App() {
  const temp = ['a', 'b', 'c', 'd']
  const [product, setProducts] = useState(temp);
  return (
    <div className="App">
      <div>THis is List and PROPS</div>
      {product.map((item) => {
        return (
          <ul>
            <li>{item}</li>
          </ul>
        )
      })}
    </div>
  );
}
export default App;
