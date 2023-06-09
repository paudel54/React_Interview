import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';
import { Routes, Route, useRouteMatch, NavLink } from "react-router-dom"

function App() {
  const { path, url } = useRouteMatch();
  return (
    <div className="App">

      <ul>
        <li> <NavLink ativeClassName="selected" to='/home'>HOME</NavLink> </li>
        <li> <NavLink to='/about'>ABOUT</NavLink> </li>
        <li> <NavLink to='/products'>PRODUCTS</NavLink> </li>
      </ul>

      <Routes>
        <Route path='/home' element={Home} />
        <Route path='/about' element={About} />
        <Route path='/products' element={Products} />
      </Routes>


    </div >
  );
}

export default App;

