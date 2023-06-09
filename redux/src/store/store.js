// Create global Store. 
import { createStore } from "redux";
const initData = {
    products: [
        { pName: "Apple", price: 10 },
        { pName: "Banana", price: 9 },
        { pName: "Orange", price: 12 },
        { pName: "Grapes", price: 8 },
        { pName: "Mango", price: 200 }
    ],
    cart: [],
    total: 0,
    users: ['admin', 'manager', 'end-user'],
    loginDet: 'None'
}
// the reducer has 2 parameter state and action: action receives the Object Literal(value) from dispatch. 
const reducer = (state = initData, action) => {
    // console.log('Lets Explore and see whats inside action obj', action);
    if (action.type === 'PURCHASE') {
        return {
            // Keeping products and total as is it..
            // this single to single updates will be handled by spread operator
            // products: state.products,
            // total: state.total, redux toolkit handles differently but here spread operator get entire state and update partcular cart.
            ...state,
            cart: [...state.cart, action.payLoad],
            total: state.total + parseInt(action.payLoad.price)
            //update the cart getting dispactehed payload to global State

        }
    }

    if (action.type === 'DELETE') {
        console.log('lets check out what comes in action', action)
        return {
            ...state,
            cart: state.cart.filter((i, index) => index !== action.payload.index),
            total: state.total - action.payload.price,
        }
    }
    if (action.type === 'LOGIN') {
        return {
            ...state, loginDet: action.loginDet
        }
    }


    return state
}
// creating Store
const store = createStore(reducer);
export default store;