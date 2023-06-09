import Cart from './components/Cart';
import Total from './components/Total';
import { useState, usestate } from 'react';
import TotalContext from './store/TotalContext';

import './App.css';

function App() {
  // Array of objects which contains the data added to the cart on clicking the dropdown
  const products = [
    { pName: 'Apple', price: 20 },
    { pName: 'Banana', price: 5 },
    { pName: 'Orange', price: 9 },
    { pName: 'Grape', price: 7 },
  ]

  const [cart, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  let handleProdChange = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let tCart = [...cart];
    console.log(tCart);
    let obj = { pName, price };
    let tPrice = parseInt(price);
    tPrice = total + tPrice;
    tCart.push(obj);

    setProducts(tCart);
    setTotal(tPrice);
  }

  return (
    <div className="App">

      <div className="customDiv">
        <h3>Purchase Component</h3>
        <hr />
        <select onChange={handleProdChange}>
          {
            products.map((product, index) => {
              return (
                <option value={product.price} key={index}>
                  {product.pName} - ${product.price}
                </option>
              )
            })
          }
        </select>
      </div>

      <TotalContext.Provider value={total}>
        {/* not necessary to pass as props  */}
        {/* <Total total={total} /> */}
        <Total />
        <Cart cart={cart} />
      </TotalContext.Provider>

      <Total total={total} />
    </div>
  );
}

export default App;
