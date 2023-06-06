import React, { useEffect, useRef } from 'react'
import "./App.css"
const App = () => {
  const iElement = useRef(null);
  useEffect(() => {
    iElement.current.focus();
  }, []);
  return (
    <div className='margin'>
      <input type='text' />
      <hr />
      <input type='text' ref={iElement} />
      <div>
        <button onClick={() => iElement.current.focus()}>Set Focus</button>
      </div>
    </div>
  )
}

export default App
