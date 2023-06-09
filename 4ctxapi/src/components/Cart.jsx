import TotalContext from "../store/TotalContext";
import React, { useContext } from "react";

const Cart = (props) => {
  const total = useContext(TotalContext);
  return (
    <div className="customDiv">
      <h3>Cart Component</h3>
      <hr />
      <ul>
        {props.cart.map((product, index) => {
          return <li key={index}>{product.pName} </li>;
        })}
      </ul>
      <div>`Total Accessing on Cart component from global Scope ${total} `</div>
    </div>
  );
};

export default Cart;
