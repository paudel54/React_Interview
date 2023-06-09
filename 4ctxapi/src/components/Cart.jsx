import React from "react";

const Cart = (props) => {
  return (
    <div>
      <div className="customDiv">
        <h3>Cart Component</h3>
        <hr />
        <ul>
          {props.cart.map((product, index) => {
            return <li key={index}>{product.pName} </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
