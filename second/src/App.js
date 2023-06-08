import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState("Loading Default...")

  // managinf multiple state on Object:

  const [personInfo, setPersonInfo] = useState({
    name: '',
    address: '',
    phone: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('FOrm Response Got Submitted. ')
    setData(`Updated Name is ${personInfo.name} your New Address is  ${personInfo.address} and Updated Phone Number is ${personInfo.phone}`);

  }
  const handleChange = (e) => {
    //  better apporcah with use of previous state
    // setPersonInfo({ ...personInfo, [e.target.name]: e.target.value })
    setPersonInfo((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    });
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" placeholder='Name' name="name" />
          <input onChange={handleChange} type="text" placeholder='Address' name="address" />
          <input onChange={handleChange} type="text" placeholder='Phone' name="phone" />
          <button>Submit</button>
          <h1>{data}</h1>
          <h2>{JSON.stringify(personInfo)}</h2>
        </form>
      </div>
    </div>
  )
}

export default App
