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
        <div>
            {props.isAdmin && prodItems}
        </div>
    );

}

export default Products
