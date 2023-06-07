import React from 'react'
import DemoComponent from './component/DemoComponent'
const App = () => {
  const product = {
    pCode: 1008,
    pName: 'Samsung'
  }
  return (
    <div>
      <DemoComponent value={1 + 4} date={new Date()} lekh='String literals not required curly brackets' test {...product} />
    </div>
  )
}

export default App
