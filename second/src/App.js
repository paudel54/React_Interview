import React, { useState } from 'react'

const App = () => {
  // Converting multiple state as Object. 
  const [data, setData] = useState("Data for UPdates");
  const [name, setName] = useState("")
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [personInfo, setPersonInfo] = useState({
    name: '',
    address: '',
    phone: ''
  });

  const sendData = (e) => {
    e.preventDefault();
    setData(`Updated Name is ${personInfo.name} your New Address is  ${personInfo.address} and Updated Phone Number is ${personInfo.phone}`);
    console.log("Fom Submitted");
  }

  const updateName = (e) => {
    setPersonInfo({ ...personInfo, name: e.target.value });
  }

  const updateAddress = (e) => {
    setPersonInfo({ ...personInfo, address: e.target.value });
  }

  const updateNumber = (e) => {
    setPersonInfo({ ...personInfo, phone: e.target.value });
  }

  return (
    <div>
      <form onSubmit={sendData}>
        <input onChange={updateName} type='text' placeholder='Your Name' />
        <input onChange={updateAddress} type='text' placeholder='Address' />
        <input onChange={updateNumber} type='text' placeholder='Phone Number' />
        <button >Submit</button>
        <h1>{JSON.stringify(personInfo)}</h1>
        <h1>{data}</h1>
      </form>
    </div>
  )
}

export default App
