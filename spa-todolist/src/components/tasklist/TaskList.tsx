import React from "react";
import "./TaskList.scss";
import { ITask } from "../../common/types";
import Task from "../task/Task";

function TaskList({
  tasks,
  onTaskDelete,
  onTaskDone,
  onTaskUndone,
  className,
}: {
  tasks: ITask[];
  onTaskDelete: (id: number) => void;
  onTaskDone: (id: number) => void;
  onTaskUndone: (id: number) => void;
  className?: string;
}) {
  return (
    <ul className={className ? "TaskList " + className : "TaskList"} aria-label="tasklist">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          done={task.done}
          onDelete={onTaskDelete}
          onDone={onTaskDone}
          onUndone={onTaskUndone}
        />
      ))}
    </ul>
  );
}

export default TaskList;
