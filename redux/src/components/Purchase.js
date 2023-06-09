import React from 'react'

const Purchase = () => {

    const products = [
        { pName: "Apple", price: 10 },
        { pName: "Banana", price: 9 },
        { pName: "Orange", price: 12 },
        { pName: "Grapes", price: 8 },

    ]

    return (
        <div className='customDiv'>
            <h3> Purchase Component</h3>
            <hr />
            <select>
                {
                    products.map((product, i) => {
                        return (
                            <option value={product.price} key={i}>
                                {product.pName} - ${product.price}
                            </option>
                        );
                    })
                }
            </select>

        </div>
    )
}

export default Purchase
