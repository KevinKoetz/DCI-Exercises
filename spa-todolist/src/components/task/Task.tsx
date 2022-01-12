import React from "react";
import "./Task.scss";
import { ITask } from "../../common/types";

function Task({
  text,
  done,
  id,
  onDelete,
  onDone,
  onUndone
}: ITask & { onDelete: (id: number) => void; onDone: (id: number) => void; onUndone: (id: number) => void }) {
  return (
    <li className="Task" aria-label="task">
      <span
        className={done ? "taskText done" : "taskText"}
        style={done ? { textDecoration: "line-through" } : undefined}
      >
        {text}
      </span>
      <input type="button" value="Delete Task" onClick={() => onDelete(id)} />
      {done ? <input type="button" value="Set undone" onClick={() => onUndone(id)} /> : <input type="button" value="Set to Done" onClick={() => onDone(id)} /> }
    </li>
  );
}

export default Task;
