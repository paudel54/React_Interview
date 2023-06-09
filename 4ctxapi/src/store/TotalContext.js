// React.createContext() is the main house in creating global values later can be accessed by the 
//any other componetn with just use of useContext() hook . 

import React from 'react'
// creating a Global context with context API and store folder is organized to make it more cleaner. 
// Creating global context is this easy
const TotalContext = React.createContext(0);
// use Demo:  const total = useContext(TotalContext);
export default TotalContext
