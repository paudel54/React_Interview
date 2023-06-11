//Converting the reducer function into Slices: Redux toolkit way . 
import { createSlice } from '@reduxjs/toolkit';

// import * as actions from './actions'

// Create product as Reducer functions. 
const initialState = {
    // we are keeping the default value of product only managing its global state. 
    products: [
        { pName: "Apple", price: 10 },
        { pName: "Banana", price: 9 },
        { pName: "Orange", price: 12 },
        { pName: "Grapes", price: 8 },
        { pName: "Mango", price: 200 }
    ],
    cart: [],
    total: 0,
}
// the reducer has 2 parameter state and action: action receives the Object Literal(value) from dispatch. 
// const productReducer = (state = initData, action) => {
//     // console.log('Lets Explore and see whats inside action obj', action);
//     if (action.type === actions.PURCHASE) {
//         return {
//             // Keeping products and total as is it..
//             // this single to single updates will be handled by spread operator
//             // products: state.products,
//             // total: state.total, redux toolkit handles differently but here spread operator get entire state and update partcular cart.
//             ...state,
//             cart: [...state.cart, action.payLoad],
//             total: state.total + parseInt(action.payLoad.price)
//             //update the cart getting dispactehed payload to global State

//         }
//     }

//     if (action.type === actions.DELETE) {
//         console.log('lets check out what comes in action', action)
//         return {
//             ...state,
//             cart: state.cart.filter((i, index) => index !== action.payload.index),
//             total: state.total - action.payload.price,
//         }
//     }


//     return state
// }

// export default productReducer;

const productSlice = createSlice({
    // create Name of Slice. 
    name: 'product',
    initialState: initialState,
    reducers: {
        // RTK handles the immutabiltiy like reducers we dont need a shallow copy of state. 
        purchase: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.total = state.total + parseInt(action.payload.price);
        },

        deleteItem: (state, action) => {
            state.cart = state.cart.filter((i, index) => index !== action.payload.index);
            state.total = state.total - action.payload.price;
        },
    }
})

// RTK allows to write "mutating" logic in reducers, It doesn't actually mutate the state because it uses the
// Immer library, which detects changes to a "draft State" & produces a brand new immutable
//state based off those changes.
//!! even though we write state change directly immer will handle it internally. 

// createReducer() & createAction() is been executed internally by createSlice()
export const { purchase, deleteItem } = productSlice.actions;
export default productSlice.reducer;