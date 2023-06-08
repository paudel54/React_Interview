import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">

      <ul>
        <li> <Link to='/home'>HOME</Link> </li>
        <li> <Link to='/about'>ABOUT</Link> </li>
        <li> <Link to='/products'>PRODUCTS</Link> </li>
      </ul>

      <Routes>
        <Route path='/' element={Home} />
        <Route path='/about' element={About} />
        <Route path='/products' element={Products} />
      </Routes>


    </div>
  );
}

export default App;
