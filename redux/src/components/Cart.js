import React from 'react'
import { useSelector } from 'react-redux';
const Cart = () => {
    const cart = useSelector((state) => state.cart);
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
