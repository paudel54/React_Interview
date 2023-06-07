import React from 'react'
import DemoComponent from './component/DemoComponent'
import { useState } from 'react'
const App = () => {
  const product = {
    pCode: 1008,
    pName: 'Samsung'
  }

  // State to control text input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [data, setData] = useState("Data");
  // Here is E is syntheic event. 
  const getData = (e) => {
    console.log('Checking the onClick Event on Button.')
    console.log(e.target.innerHTML);
  }

  const getDivInfo = (e) => {
    console.log('Content of div', e.target.innerHTML)
  }

  const getInputData = (e) => {
    setData(e.target.value)
    // console.log('Info from text Input', e.target.value)
  }

  const showData = (e) => {
    e.preventDefault();
    setData(`${firstName}, ${lastName} and ${mobile}`)
  }

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  }
  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  }
  const mobileChangeHandler = (e) => {
    setMobile(e.target.value);
  }


  return (
    <div>
      <DemoComponent value={1 + 4} date={new Date()} lekh='String literals not required curly brackets' test {...product} >
        HEllo Guys, I am content on COmponent, Some calls me Children!!
      </DemoComponent>
      <p>Welcome to Event Handling Working with textbox checkbox </p>
      {/* On Click must be or event be CamelCase.  */}
      {/* if we use parantheis that function will be called immediately on load */}
      {/* on passing parameter or args we need to have a fuction with return so it prevents on load behaviour.  */}
      <button onClick={getData}>
        Get Data
      </button>
      <div onClick={getDivInfo}>
        synthetic events to get content of div.
      </div>

      <div>
        <input onChange={getInputData} type='text' />
      </div>
      <p>Working with forms for preVenting Default Browser Behaviours</p>

      <div>
        <form onSubmit={showData}>
          <input onChange={firstNameChangeHandler} type="text" placeholder='Fist Name' />
          <br />
          <input onChange={lastNameChangeHandler} type="text" placeholder='Last Name' />
          <br />
          <input onChange={mobileChangeHandler} type="text" placeholder='Mobile' />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div>
          <h1>{data}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
