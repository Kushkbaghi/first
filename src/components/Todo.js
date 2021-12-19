import React from "react";

// Print todo element från todo list as HTMML li element
function Todo({ todo }) {
  return (
    <div className="toDo">
      <li>{todo.task}</li>

    </div>
  );
}

export default Todo;
