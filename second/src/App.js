import React, { useState } from 'react'

const App = () => {
  // Converting multiple state as Object. 
  const [data, setData] = useState("Data for UPdates");
  // const [name, setName] = useState("")
  // const [address, setAddress] = useState("");
  // const [phone, setPhone] = useState("");

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
  // updating individual value of state inside an object by the use of Spread operator
  // Creating dynamic handlers single change handler 
  // const updateName = (e) => {
  //   setPersonInfo({ ...personInfo, name: e.target.value });
  // }

  // const updateAddress = (e) => {
  //   setPersonInfo({ ...personInfo, address: e.target.value });
  // }

  // const updateNumber = (e) => {
  //   setPersonInfo({ ...personInfo, phone: e.target.value });
  // }

  const inputChangeHandler = (e) => {
    // in ES6 adding of  square bracket makes it as variable [] 
    // Creating a dynamicKey for Input so we can point the name of particular element for feild updates. 
    setPersonInfo({ ...personInfo, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <form onSubmit={sendData}>
        <input onChange={inputChangeHandler} type='text' placeholder='Your Name' name="name" />
        <input onChange={inputChangeHandler} type='text' placeholder='Address' name="address" />
        <input onChange={inputChangeHandler} type='text' placeholder='Phone Number' name="phone" />
        <button >Submit</button>
        <h1>{JSON.stringify(personInfo)}</h1>
        <h1>{data}</h1>
      </form>
    </div>
  )
}

export default App
