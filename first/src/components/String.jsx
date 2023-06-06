import React, { useEffect, useState } from "react";

const String = () => {
  const [string, setString] = useState("0,0");
  const dispalyXY = (e) => {
    let str = e.pageX + "," + e.pageY;
    setString(str);
    console.log(str);
  };
  useEffect(() => {
    console.log("Use Effect has been called");
    window.addEventListener("mousemove", dispalyXY);
    // Return on useEffects works on on unmounting or removing the component
    // Cleaning up the code or component will unmount .
    // executed when unmount phase is fired for use
    return () => {
      console.log("Clean-up code");
      window.removeEventListener("mousemove", dispalyXY);
    };
  }, []);
  return (
    <div>
      <h1>This Is String</h1>
      <h1>{string}</h1>
    </div>
  );
};

export default String;
