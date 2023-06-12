import { createSlice } from '@reduxjs/toolkit';

// import * as actions from './actions'

const initialState = {
    users: ['admin', 'manager', 'end-user'],
    // loginDet is passed down on action.loginDet
    loginDet: 'None'
}
// Create Slice helps us to create the reducer and actions with object a single object in an easir way. 
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            // here we have no payload becasue only string is passed no any object literals. 
            // action receives an object passed from component. 
            // Object { type: "login/userLogin", payload: "manager" }
            // state: Proxy { <target>: {…}, <handler>: {…} } ! we better focus on state
            console.log('checking state', state)
            state.loginDet = action.payload
        }
    }
})
// userLogin is a reducer fn
export const { userLogin } = loginSlice.actions;
export default loginSlice.reducer;



// the reducer has 2 parameter state and action: action receives the Object Literal(value) from dispatch.
// const loginReducer = (state = initData, action) => {
//     if (action.type === actions.LOGIN) {
//         return {
//             ...state, loginDet: action.loginDet
//         }
//     }


//     return state
// }

// export default loginReducer;