import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState('Data Loading....');
  const [personInfo, setPersonInfo] = useState({
    name: '',
    mobile: ''
  })
  const [radio, setRadio] = useState({
    male: 'false',
    female: 'false',
    married: 'false'
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(`Name: ${personInfo.name} , phoneNo: ${personInfo.mobile} Male?: ${radio.male} female?: ${radio.female} Married?: ${radio.married}`)
    console.log('Form Submitted!!');
  }

  const handleChange = (e) => {
    setPersonInfo(
      (prevState) => {
        return {
          ...prevState, [e.target.name]: e.target.value
        }
      }
    )
  }
  // Creating Seperate State object of checkbox and radios. 
  const handleCheckbox = (e) => {
    setRadio((prevState) => {
      return { ...prevState, [e.target.name]: e.target.checked }
    })
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div> <span>Employee Name :</span> <input onChange={handleChange} type='text' name='name' /></div>
          <div><span>Gender :</span> <input onChange={handleCheckbox} type="radio" name="male" /> <span>Male</span> <input onChange={handleCheckbox} type="radio" name="female" /> <span>Female</span></div>
          <div><span>Married :</span> <input onChange={handleCheckbox} type="checkbox" name="married" /> </div>
          <div> <span>Mobile :</span> <input onChange={handleChange} type='text' name='mobile' /></div>
          <button>Submit</button>
          {JSON.stringify(data)}
        </form>
      </div>
    </div>
  )
}

export default App
