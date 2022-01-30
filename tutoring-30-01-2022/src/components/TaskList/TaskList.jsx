import Task from "../Task/Task";

function TaskList({ tasks }) {
  return (
    <>
      <h2>Tasklist</h2>
      <ol className="TaskList" id="tasklist" aria-label="tasklist">
        {tasks.map((task) => (
          <Task
            id={task.id}
            text={task.text}
            status={task.done}
            key={task.id}
          />
        ))}
      </ol>
    </>
  );
}

export default TaskList;
