import { useNavigate, useParams } from "react-router-dom"
import { Prompt } from "react-router"

function App() {
  const history = useNavigate();
  const params = useParams();
  console.log('Return from params', params);
  console.log('Return from history object', history);
  // const dataEntered = false;
  return (
    <div className="App">
      {/* <Prompt when={!dataEntered} message="Do You really want to leave?" /> */}
      <div>
        Onto Landing Page
      </div>


    </div >
  );
}

export default App;



<Prompt when={!dataEntered} message={(location, action) => {
  if (location.pathname === "/about") {
    return false;
  } else {
    return true;
  }
}} />