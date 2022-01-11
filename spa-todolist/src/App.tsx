import React, { useEffect, useState } from "react";
import "./App.scss";
import { ITask } from "./common/types";
import isITaskArray from "./common/isITaskArray";
import TaskList from "./components/tasklist/TaskList";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    if (!tasksFromLocalStorage) return;
    const tasks = JSON.parse(tasksFromLocalStorage) as unknown;
    if (!isITaskArray(tasks))
      throw new Error(
        `Expected to get an ITask[] from localStorage but got: \n ${tasks}`
      );
    setTasks(tasks);
  }, []);

  const handleTaskDelete = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleTaskDone = (id: number) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, done: true } : task))
    );
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="taskText">Define your task</label>
        <input type="text" id="taskText" />
        <input type="button" value="Add a Task" />
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
