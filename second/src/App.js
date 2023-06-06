import './App.css';
import { useState } from 'react';
import ListItem from './component/ListItem';
// Rendering the collection of list in React with map() fn. 
function App() {
  // array of object literals
  const temp = [
    { id: 1, pName: 'Apple', price: '$12' },
    { id: 2, pName: 'Orange', price: '$9' },
    { id: 3, pName: 'Lemon', price: '$2' },
    { id: 4, pName: 'Kiwi', price: '$7' },
  ]
  const [products, setProducts] = useState(temp);
  return (
    <div className="App">
      <div>THis is List and PROPS</div>
      {/* {JSON.stringify(products)} */}
      <div>
        {products.map((item) => {
          return (
            <ListItem key={item.id.toString()} pName={item.pName} />
          )
        })}
      </div>
    </div>
  );
}
export default App;
