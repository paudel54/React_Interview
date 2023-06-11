import { useSelector, useDispatch } from 'react-redux'

import React from 'react'

const Purchase = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.pr.products)
    const loginDet = useSelector((state) => state.lr.loginDet)
    const purchaseHandler = (e) => {
        // console.log(e);
        // Banana - $9
        let pName = e.target.options[e.target.selectedIndex].text;
        // 9
        let price = e.target.value;
        let obj = { pName, price };
        // inorder to update global store we  use dispatch method. 
        // console.log("Object List", obj);
        // dispatch always acceptes object literals to update store  value.  
        dispatch({ type: 'PURCHASE', payLoad: obj });
        //dispatch immediately calls for reducer function .. reducer fn consists of state & action. this object  is passed to castion. 
    }
    return (
        <div className='customDiv'>
            <h3> Purchase Component - user:- {loginDet}</h3>
            <hr />
            {/* Passing out syntentic event on handler for select element */}
            <select onChange={(e) => purchaseHandler(e)}>
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
