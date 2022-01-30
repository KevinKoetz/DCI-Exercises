import { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState("");
  
  useEffect(() => {
    const ls = localStorage.getItem("tasks");
    console.log(ls);
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    setTasks(tasks)
  }, [])

  const addTaskHandler = () => {
    setTasks(tasks => [...tasks, {id: uuid(), text: text, done: false}])
  }

  return (
    <div className="App">
      <div>
        <label>Your Task<input type="text" value={text} onChange={(e) => setText(e.target.value)}/></label>
        <input type="button" value="Add Task" onClick={addTaskHandler}/>
        <TaskList tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
