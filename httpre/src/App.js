import './App.css';
import { useState } from 'react';
import User from './components/User';
import Todo from './components/Todo';
function App() {
  // state for fetching data from API's and storing into an empty array. 
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  // state management flag for conditional rendering:

  const [userData, setUserData] = useState(true);

  // fetching data with fetch api //GET REQUEST
  //Json placeholder website gives us testing REST API : 

  const fetchUsers = () => {
    // console.log('fetch user clicked !')
    // fetch method returns promise object so we can chain it with .then() .catch() method to handle response. 
    fetch('https://jsonplaceholder.typicode.com/users')
      // step:1 this then gives us JSON data
      .then(response => response.json())
      // step: 2  this callback logs the response  
      .then((json) => {
        // updating the api data insto state. 
        // console.log(json)
        setUsers(json);
      },)
    setUserData(true);

  }

  const fetchTodos = () => {
    // fetch method with url that retursn promise object which can be chained with callbacks. 
    fetch('https://jsonplaceholder.typicode.com/todos')
      // convert response into json and handle it 
      .then(res => res.json())
      .then(json => {
        setTodos(json);
      })
    // .then(todos => console.log(todos))
    // flag to manage 
    setUserData(false);
  }

  return (
    <div className="App">
      <div className="topbar"></div>
      <p>Here is How we fetch data with buttons!</p>
      <button onClick={fetchUsers}>Users</button>
      <button onClick={fetchTodos}>Todos</button>

      {
        userData ?
          users.map((user, index) => {
            return (
              <User key={index} user={user} />
            )
          }) : todos.map((todo, index) => {
            return (
              <div>
                <Todo todo={todo} />
              </div>
            )
          })
      }

    </div>
  );
}

export default App;
