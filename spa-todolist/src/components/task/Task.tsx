import React from "react";
import "./Task.scss";
import { ITask } from "../../common/types";

function Task({
  text,
  done,
  id,
  onDelete,
  onDone,
}: ITask & { onDelete: (id: number) => void; onDone: (id: number) => void }) {
  return (
    <li className="Task">
      <span className={done ? "taskText done" : "taskText"}>{text}</span>
      <input type="button" value="Delete Task" onClick={() => onDelete(id)}/>
      <input type="button" value="Set to Done" onClick={() => onDone(id)}/>
    </li>
  );
}

export default Task;
