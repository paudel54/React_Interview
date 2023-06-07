import React from 'react'
import DemoComponent from './component/DemoComponent'
const App = () => {
  const product = {
    pCode: 1008,
    pName: 'Samsung'
  }

  const getData = () => {
    console.log('Checking the onClick Event on Button.')
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
      <button onClick={() => getData()}>
        Get Data
      </button>
    </div>
  )
}

export default App
