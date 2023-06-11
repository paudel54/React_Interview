const initData = {
    users: ['admin', 'manager', 'end-user'],
    loginDet: 'None'
}
// the reducer has 2 parameter state and action: action receives the Object Literal(value) from dispatch. 
const loginReducer = (state = initData, action) => {
    if (action.type === 'LOGIN') {
        return {
            ...state, loginDet: action.loginDet
        }
    }


    return state
}

export default loginReducer;