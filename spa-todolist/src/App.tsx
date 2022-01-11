import React, { useEffect, useState } from "react";
import "./App.scss";
import { ITask } from "./common/types";
import isITaskArray from "./common/isITaskArray";
import TaskList from "./components/tasklist/TaskList";
import generateId from "./common/generateId";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskText, setTaskText] = useState("")

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    if (!tasksFromLocalStorage) return;
    const tasks = JSON.parse(tasksFromLocalStorage) as unknown;
    if (!isITaskArray(tasks))
      throw new Error(
        `Expected to get an ITask[] from localStorage but got: \n ${tasks}`
      );
    setTasks(tasks);
    generateId(Math.max(...tasks.map(task=>task.id)))
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handleTaskDelete = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleTaskDone = (id: number) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, done: true } : task))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!taskText) return;
    setTasks((tasks) => [...tasks, {text: taskText, done: false, id: generateId()}])
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskText">Define your task</label>
        <input type="text" id="taskText" onChange={(e)=>setTaskText(e.target.value)} value={taskText}/>
        <input type="submit" value="Add a Task" />
      </form>
      <TaskList
        tasks={tasks}
        onTaskDelete={handleTaskDelete}
        onTaskDone={handleTaskDone}
      />
    </div>
  );
}

export default App;
