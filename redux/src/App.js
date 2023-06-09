import './App.css';
import Purchase from './components/Purchase';
import Cart from './components/Cart';
import Total from './components/Total';
function App() {

  return (
    <div className="App">
      <div>
        Understanding Redux here!!!!
        <Purchase />
        <Cart />
        <Total />
      </div>
    </div>
  );
}

export default App;
