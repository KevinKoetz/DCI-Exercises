import React, { useEffect, useState } from 'react';
import './App.scss';
import {ITask} from "./common/types";
import isITaskArray from './common/isITaskArray';
import TaskList from './components/tasklist/TaskList';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(()=>{
    const tasksFromLocalStorage = localStorage.getItem("tasks")
    if(!tasksFromLocalStorage) return;
    const tasks = JSON.parse(tasksFromLocalStorage) as unknown
    if(!isITaskArray(tasks)) throw new Error(`Expected to get an ITask[] from localStorage but got: \n ${tasks}`)
    setTasks(tasks);
  }, [])

  return (
    <div className="App">
      <form>
        <label htmlFor="">Define your task</label>
        <input type="text" name="Task Text" />
        <input type="button" value="Add a Task" />
      </form>
      <TaskList tasks={tasks}/>
    </div>
  );
}



export default App;
