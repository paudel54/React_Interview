// this is login component. =>to action.js=> loginSlice =>update the State. 
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { validateUser } from '../store/actions';

// import { LOGIN } from '../store/actions';\
// // import slices. 
// import { userLogin } from '../store/loginSlice';
// commented userLogin so i can take it to middleware for validation and dispatch action for login. 

// import { validateUser } from '../store/actions';

const Login = () => {
    const users = useSelector(state => state.lr.users);
    const dispatch = useDispatch();
    const loginHandler = (e) => {
        let loginDet = e.target.options[e.target.selectedIndex].text;
        // dispatch({ type: LOGIN, loginDet: loginDet });
        // dispatch(validateUser(loginDet));
        // update store with dispatch: userLogin() is reducer fn of a slice login: and loginDet is payload to it 
        // dispatch(userLogin(loginDet));
        //apply middleware. 
        dispatch(validateUser(loginDet));
    }
    return (
        <div className='customDiv'>
            <h3>Login Component</h3>
            <hr />
            {/*!!! on CHANGE WE COULD HAVE DISPATCHED EVENTS TO UPDATE STORE BUT WE NEEDED VALIDATION WHICH IS ASYNC AND TO HANDLE 
                ASYNC WITH DISPATCH, SINCE REUCER ONLY ACCEPTS PURE FN. TO HANDLE ASYNC WE NEEDED REDUX THUNK A MIDDLE-WARE THAT 
                MAKE DISPATCH AVAILABE
            */}
            <select onChange={(e) => loginHandler(e)}>
                {users.map((user, index) => {
                    return (
                        <option key={index}>
                            {user}
                        </option>
                    )
                })
                }
            </select>
        </div>
    )
}

export default Login
