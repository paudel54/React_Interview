import './App.css';
import { useState } from 'react';
import User from './components/User';
import Todo from './components/Todo';
import Error from './components/Error';

function App() {
  // state for fetching data from API's and storing into an empty array. 
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  // state management flag for conditional rendering:
  const [userData, setUserData] = useState(true);
  // State management flag for Error handling or catching errors.
  const [errorFlag, setErrorFlag] = useState(false);

  // fetching data with fetch api //GET REQUEST
  //Json placeholder website gives us testing REST API : 

  const fetchUsers = () => {
    // console.log('fetch user clicked !')
    // fetch method returns promise object so we can chain it with .then() .catch() method to handle response. 
    fetch('https://jsonplaceholder.typicode.com/users')
      // step:1 this then gives us JSON data
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("ERROR !!!!! ")
        }
      })
      // step: 2  this callback logs the response  
      .then((json) => {
        // updating the api data insto state. 
        // console.log(json)
        setUsers(json);
      },)
      .catch((error) => {
        // console.log('Error Caugeht', error);
        setErrorFlag(true);
      });
    // handling Error chaining the .catch() method onto it. 

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
      .catch((error) => {
        setErrorFlag(true);
      });
    // .then(todos => console.log(todos))
    // flag to manage 
    setUserData(false);
  }

  if (errorFlag) {
    return (
      <Error />
    )
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
