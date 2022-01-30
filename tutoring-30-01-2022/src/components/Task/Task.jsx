
function Task({id, text, status}) {
  return (
    <li className="Task" aria-label="task">
        {status ? <s aria-label="Done">{text}</s> : text}
    </li>
  );
}

export default Task;