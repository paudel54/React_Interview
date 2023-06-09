import React, { useContext } from "react";
// Create Context is required what so ever.
import TotalContext from "../store/TotalContext";

const Total = () => {
  const total = useContext(TotalContext);
  return (
    <div className="customDiv">
      <h3>Total Component</h3>
      <hr />
      <h2>Total : {total}</h2>
    </div>
  );
};

export default Total;
