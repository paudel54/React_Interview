import React, { useState } from 'react'

const Products = (props) => {
    const [items, setItems] = useState([
        { pCode: 1, pName: "Apple" },
        { pCode: 2, pName: "Banana" },
        { pCode: 3, pName: "Grapes" },
        { pCode: 4, pName: "Oranges" },
    ])
    // Storing the result form map into a variable or Storing JSX into variables. 
    const prodItems = (
        items.map((item) => {
            return (<li>{item.pName}</li>)
        })
    )

    return (
        props.isAdmin ? prodItems : <h1> No Data Found</h1>
    );



}

export default Products
