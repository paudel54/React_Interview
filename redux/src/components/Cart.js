import React from 'react'

const Cart = () => {
    const cart = [
        { pName: 'Apple', price: 10 },
        { pName: 'Orange', price: 20 },
    ];
    return (
        <div className='customDiv'>
            <h3>Cart Component</h3>
            <hr />
            {
                cart.map((product, index) => {
                    return (
                        <li key={index}>{product.pName}</li>
                    )
                })
            }
        </div >
    )
}

export default Cart
