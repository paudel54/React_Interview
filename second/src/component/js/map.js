// Map() function creates  a new array.  

// Question2: Find square root of each element 
let arr = [3, 4, 6, 8, 10];
// mapping with arrow function
let squared = arr.map(
    (item, index) => item * item
);

let sqroot = arr.map(item => Math.sqrt(item));
console.log("The Square Root of item is ", sqroot);
console.log("The new updated value of an Array", squared);
// let a2 = [1, 3, 5, 7, 9];

// a2.map(function (item, index) {
//     return console.log(item, index);
// })

// question: Find the length of each element in a new Array with map function

let fruits = ["apple", "banana", "Oranges"];
// finding out the length of string in array with array.map
let arrLength = fruits.map(fruit => fruit.length);
console.log('Mapping to find length of array', arrLength);
console.log('Direct method to find length', arr.length)

// Extract pName of object literals onto new Array
let products = [
    { pCode: 1, pName: "a" },
    { pCode: 2, pName: "b" },
    { pCode: 3, pName: "c" },
]

let pNames = products.map(item => item.pName);
console.log("Here is the list of extracted elements of pName from object Literals", pNames)
