import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState("Data for UPdates");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    setData(`your New Address is  ${address} and Updated Phone Number is ${phone}`);
    console.log("Fom Submitted");
  }

  const updateAddress = (e) => {
    setAddress(e.target.value);
  }

  const updateNumber = (e) => {
    setPhone(e.target.value);
  }


  return (
    <div>
      <form onSubmit={sendData}>
        <input onChange={updateAddress} type='text' placeholder='Address' />
        <input onChange={updateNumber} type='text' placeholder='Phone Number' />
        <button >Submit</button>
        <h1>{data}</h1>
      </form>
    </div>
  )
}

export default App
