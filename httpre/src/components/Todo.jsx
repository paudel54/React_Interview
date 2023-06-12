import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <div className="todos">
        <h3>Id: {todo.id}</h3> <hr />
        <h3>Title: {todo.title} </h3>
      </div>
    </div>
  );
};

export default Todo;
