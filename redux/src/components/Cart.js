import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const loginDet = useSelector((state) => state.loginDet)
    const dispatch = useDispatch();
    // Creating delete handler. 

    const deleteHandler = (index, price) => {
        // itemIndex will be sent as payload or obj to reducer Function. 
        // console.log(index);
        // Passing out object as payload not single element 
        dispatch({ type: 'DELETE', payload: { index, price } });
    }

    return (
        <div className='customDiv'>
            <h3>Cart Component - {loginDet}</h3>
            <hr />
            {
                cart.map((product, index) => {
                    return (
                        <li onClick={() => deleteHandler(index, product.price)} key={index}>{product.pName}</li>
                    )
                })
            }
        </div >
    )
}

export default Cart
