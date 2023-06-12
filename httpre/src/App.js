import './App.css';

function App() {

  // fetching data with fetch api //GET REQUEST
  //Json placeholder website gives us testing REST API : 

  const fetchUsers = () => {
    // console.log('fetch user clicked !')
    // fetch method returns promise object so we can chain it with .then() .catch() method to handle response. 
    fetch('https://jsonplaceholder.typicode.com/users')
      // step:1 this then gives us JSON data
      .then(response => response.json())
      // step: 2  this callback logs the response  
      .then(json => console.log(json));
  }

  const fetchTodos = () => {
    // fetch method with url that retursn promise object which can be chained with callbacks. 
    fetch('https://jsonplaceholder.typicode.com/todos')
      // convert response into json and handle it 
      .then(res => res.json())
      .then(todos => console.log(todos))
  }

  return (
    <div className="App">
      <div className="topbar"></div>
      <p>Here is How we fetch data with buttons!</p>
      <button onClick={fetchUsers}>Users</button>
      <button onClick={fetchTodos}>Todos</button>
    </div>
  );
}

export default App;
