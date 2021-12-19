import React, {useState} from "react";

// build Todo form
function TodoForm({addTodo}) {

  // destructore, uppdate todolist
  const [todo, setNewTask ] = useState({
      task : ""
  });

// new task from form replace as arg in setNewTask function
function setArgToFunc(e){
    setNewTask({...todo, task: e.target.value});
  
}

// after submit wait and run add todo function 
function submitIt (e){
    e.preventDefault();
    // create new task with new date value
    if(todo.task.trim()){
        addTodo({...todo, date: new Date()})
    }
}
  return(

    // By submit call sumbit function
      <form onSubmit={submitIt}>
          <input type="text"
          name="task" required 
          value={todo.task}
          onChange={setArgToFunc}/>
          <button className="btn">Lägg till</button>
      </form>
  )
}
export default TodoForm;