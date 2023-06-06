import React from "react";

const Footer = () => {
  console.log("Footer Rendered");
  //   css styling in form of object Literals
  const fstyle = {
    border: "1px dotted grey",
    width: "100%",
    color: "grey",
  };
  return (
    <div>
      <h6 style={fstyle}>Displaying Footer </h6>
    </div>
  );
};

export default React.memo(Footer);
