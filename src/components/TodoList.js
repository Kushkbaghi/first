import React from "react";
import Todo from "./Todo";

// Use destuctor and print the todo list as html ul element
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.date} todo={todo} />
      ))}
    </ul>
  );
}
export default TodoList;