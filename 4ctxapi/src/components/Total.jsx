import React from "react";
import TotalContext from "../store/TotalContext";
const Total = (props) => {
  return (
    // consuming the global context.
    <TotalContext.Consumer>
      {/* here context is readily availabel on this case we have passed total */}
      {(total) => {
        return (
          <div className="customDiv">
            <h3>Total Component</h3>
            <hr />
            <h2>Total : {total}</h2>
          </div>
        );
      }}
    </TotalContext.Consumer>
  );
};

export default Total;
