// Create global Store. 
import { createStore } from "redux";
const initData = {
    products: [
        { pName: "Apple", price: 10 },
        { pName: "Banana", price: 9 },
        { pName: "Orange", price: 12 },
        { pName: "Grapes", price: 8 },
    ],
    cart: [],
    total: 0
}
// the reducer has 2 parameter state and action: action receives the Object Literal(value) from dispatch. 
const reducer = (state = initData, action) => {

    return state
}

// creating Store
const store = createStore(reducer);
export default store;