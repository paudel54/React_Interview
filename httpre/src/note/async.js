// PROMISE
//https://www.youtube.com/watch?v=li7FzDHYZpc
// The Promise object represents the eventual completion( or failure) of an asynchronous operation and it's resulting value.
//Example oder coffee in resutrant waiter takes some time to fulfull analogy
//waiter promises to bring that coffee however you can't drink it at that time we have to wait until promised is fulfilled and get served.

//let say if a request is make to 3rd party api promise is returned that either resolves or rejected.

// const whereIsMyCoffeeOrder = function(orderId){
//     return Promise((resolve,reject)=>{
//         coffeeApi.checkStateus(orderId, (error,coffeeStatus)=>{
//             if(error){
//                 //promise.fail
//                 reject(error;)
//             }else{
//                 //promise is fulfilled
//                 resolve(coffeeStatus)
//             }
//         })
//     })
// }


// const axios = require('axios');

// // get method returns promise object we can chain .then() method.  
// axios
//     .get('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         console.log(`you can see response ${response}`);
//     })
//     .catch(error => {
//         console.log('Error Detected!!!!')
//     })

// // console. log came fist on race wow 😲😲😲 THis is beacuse the code in then and catch either executed after our request returns. 
// console.log('I should be second lets see where am i?')

// ******************************************************************

// JS helps in getting the result of requewt
//handle fulfilled(resolve) promises
// then is called with the task completes.
//Promise.then((result)=>{})
//Handle failed(rejected) promises
// it is called when anything goes wrong in making request.
//promise.catch((error)=>{})

//REBIRTH OF AWAIT HOLD THE EXECUTION UNTIL THE REQUEST IS COMPLETED. IT JAMMS THE EXECUTION UNTIL RESOLVED.
//PROMISE IS USED FOR MORE ASYNC CODE AND ASYNC AWAIT IS TO  IMPLEMENT MORE RESTRICTIVE CODE.

// AWAIT OPERATOR IS USED TO WAIT FOR A PROMISE. IT CAN BE USED INSIDE AN ASYNC FUNCTION.
//WITH REGULAR JavaScript Code; however it can be used on its own . 

// *******************************************ASYNC AWAIT*****************************


const axios = require('axios');

// get method returns promise object we can chain .then() method.  
// to handle error in  async await we can use try catch block. 

async function getActivity() {
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(`you can see response ${response}`);
    } catch (error) {
        console.log(`Error detected ${error}`)
    }
}

getActivity();
// console. log came fist on race wow 😲😲😲 THis is beacuse the code in then and catch either executed after our request returns. 
console.log('I should be second lets see where am i?')