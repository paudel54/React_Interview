import React from 'react'
import DemoComponent from './component/DemoComponent'
const App = () => {
  return (
    <div>
      <DemoComponent value={1 + 4} date={new Date()} lekh='String literals not required curly brackets' />
    </div>
  )
}

export default App
