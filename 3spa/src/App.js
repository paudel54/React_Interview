import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';
import { Routes, Route, NavLink, useNavigate, useParams } from "react-router-dom"

function App() {
  const history = useNavigate();
  const params = useParams();
  console.log('Return from params', params);
  console.log('Return from history object', history);
  return (
    <div className="App">
      <div>
        Onto Landing Page
      </div>


    </div >
  );
}

export default App;

