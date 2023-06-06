import React, { useState, useCallback } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import DisplayCounter from './components/DisplayCounter';
import DisplayFlag from './components/DisplayFlag';
import ChangeState from './components/ChangeState';

const App = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  // Adding dependencies if changes then execute this. 
  const changeCnt = useCallback(
    () => {
      setCount(count + 1);
    }, [count]
  )
  const changeFlag = useCallback(
    () => {
      setFlag(!flag)
    }, [flag]
  )
  return (
    <div className='margin'>
      <Header />
      <DisplayCounter counter={count} />
      <DisplayFlag flag={flag} />
      <ChangeState caption="Change Count" click={changeCnt} />
      <ChangeState caption="Change FLag" click={changeFlag} />
      <Footer />
    </div>
  )
}

export default App

