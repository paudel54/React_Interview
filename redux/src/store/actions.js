import { userLogin } from './loginSlice';
// If we have bigger file we can manage to have different actions files. for login delete purchase seperately.
export const PURCHASE = 'PURCHASE';
export const DELETE = 'DELETE';
export const LOGIN = 'LOGIN';

// async redux was needed only to fulfull this problem
//with validation like process. since, direct flow is rejected
//reducer accepts only
//pure functoin. 

// HERE ValidateUser is an async thunk or middleware or async function. 
export const validateUser = (loginDet) => {
    return dispatch => {
        //API call fetching user & then validate. 
        //Redux thunk Middleware will make the dispatch object available whenever you have dispatched the acton.
        // to resolve this dispatch error redux thunk fn  middleware  was introduced. 
        setTimeout(() => {
            // dispatch({ type: LOGIN, loginDet: loginDet });
            // earlier we need to setup for getting dispatch for react-thunk now RTK auto configures.
            dispatch(userLogin(loginDet));
        }, 2000)
    }
}