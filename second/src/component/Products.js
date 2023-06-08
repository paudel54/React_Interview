import React, { useState } from 'react'

const Products = (props) => {
    const [items, setItems] = useState([
        { pCode: 1, pName: "Apple" },
        { pCode: 2, pName: "Banana" },
        { pCode: 3, pName: "Grapes" },
        { pCode: 4, pName: "Oranges" },
    ])

    if (props.isAdmin) {
        return (
            <div>
                {items.map((item) => {
                    return (<li>{item.pName}</li>)
                })}
            </div>
        )
    } else {
        return (
            <h1>No Data Found !!!!!</h1>
        )
    }



}

export default Products
