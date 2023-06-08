import React, { useState } from 'react'
import Products from './component/Products';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  // upon unchecked the e.target.checked returns false automatically. 
  const inputChangeHandler = (e) => {
    setIsAdmin(e.target.checked);
  }

  return (
    <div>
      <input onChange={inputChangeHandler} type="checkbox" /> Is admin
      <hr />
      <Products isAdmin={isAdmin} />
      {/* {isAdmin.toString()} */}
    </div>
  )
}

export default App
