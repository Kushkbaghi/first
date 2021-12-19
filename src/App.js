import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


function App() {
  const [todos, setNewTask] = useState([]);

  // Add new todo to the list
  function addTodo(todo) {
    setNewTask([todo, ...todos]);
  }
  return (
    <div className="App">
      {/* HTML section  */}
      <section className="todoList">
        <h1>Att göra</h1>

             {/* Add form  */}
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos}/>
      </section>
    </div>
  );
}
export default App;
