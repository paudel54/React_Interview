import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import store from './store/store';
// import loginReducer from './store/loginReducer';
// import productReducer from './store/productSlice';
import loginSlice from './store/loginSlice';
import productSlice from './store/productSlice';

// we are creating a combine reducer an createStore for managing multiple redux stores. 
// combineReducers and createStore are managing the state. 

//depreciated Method
// inorder to apply middleware we need to use this function. and  npm i redux-thunk. To activate middleware. 
// import { combineReducers, createStore, applyMiddleware } from 'redux';

// using RTK to configureStore.
// configureStore() will create the store & will also combinereducers for us. 
import { configureStore } from '@reduxjs/toolkit';

// import thunk from 'redux-thunk';
//createStore() appepts reducer as input since, we have multiple Reducers!! 
//combile reducer assists onthis regard. 

// const rootReducer = combineReducers({
//   // we have combined the reducer as object Literals. :" pr and lr becoming parent key for accessing values. "
//   pr: productReducer,
//   //to access pr=> we need to do it as : state.pr.products  [[products is the initData into productReducer]]
//   lr: loginReducer
//   //to access lr=> we need to do it as : state.lr.loginDet || users
// })

// we can use n number of middlewares seperated by commas if we need to 
//can add custom middlewares too but. applyMiddleware is the key to activate middleware. 
// thunk being middleware will execute
//automatically when there is
//a dispatch() method executed.
// const store = createStore(rootReducer, applyMiddleware(thunk));

//configure Store accepts object literals as argument. 

const store = configureStore({
  // Its like a same way passing combined reducer here onto store. 
  reducer: {
    // There are various keys like middleware/enhancers that can be passed into reducer as config store. 
    pr: productSlice,
    lr: loginSlice
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
