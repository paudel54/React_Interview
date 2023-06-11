import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import store from './store/store';
import loginReducer from './store/loginReducer';
import productReducer from './store/productReducer';

// we are creating a combine reducer an createStore for managing multiple redux stores. 
// combineReducers and createStore are managing the state. 
import { combineReducers, createStore } from 'redux';
//createStore() appepts reducer as input since, we have multiple Reducers!! 
//combile reducer assists onthis regard. 

const rootReducer = combineReducers({
  // we have combined the reducer as object Literals. :" pr and lr becoming parent key for accessing values. "
  pr: productReducer,
  //to access pr=> we need to do it as : state.pr.products  [[products is the initData into productReducer]]
  lr: loginReducer
  //to access lr=> we need to do it as : state.lr.loginDet || users
})

const store = createStore(rootReducer);

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
