import React from "react";

const ChangeState = (props) => {
  console.log("Change State Rendered");
  const btnStyle = {
    height: "50px",
    width: "150px",
    margin: "5px",
  };
  return (
    <div>
      {JSON.stringify(props)}
      <button style={btnStyle} onClick={props.click}>
        {props.caption}
      </button>
    </div>
  );
};

export default React.memo(ChangeState);
