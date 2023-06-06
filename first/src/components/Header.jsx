import React from "react";

const Header = () => {
  console.log("Header Rendered");
  const hStyle = {
    border: "2px soild skyblue",
    width: "100%",
    color: "blue",
  };
  return (
    <div>
      <h4 style={hStyle}> Displaying the headher Section</h4>
    </div>
  );
};

export default React.memo(Header);
