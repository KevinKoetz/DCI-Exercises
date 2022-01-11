import React from "react";
import "./TaskList.scss";
import { ITask } from "../../common/types";
import Task from "../task/Task";

function TaskList({
  tasks,
  onTaskDelete,
  onTaskDone
}: {
  tasks: ITask[];
  onTaskDelete: (id: number) => void;
  onTaskDone: (id: number) => void;
}) {
  return (
    <ul className="TaskList" aria-label="tasklist">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          done={task.done}
          onDelete={onTaskDelete}
          onDone={onTaskDone}
        />
      ))}
    </ul>
  );
}

export default TaskList;
