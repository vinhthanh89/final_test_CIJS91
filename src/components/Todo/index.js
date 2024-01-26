
import "./style.css";

const Todo = ({todo , handleIsComplete}) => {
  const { id, task, isCompleted } = todo;
  return (
    <div className="task-item">
      <input
        onChange={() => handleIsComplete(id)}
        checked={isCompleted}
        className="button checkbox"
        type="checkbox"
      />
      <span className={`task__todo ${isCompleted ? "finish" : ""}`}>
        {task}
      </span>
    </div>
  );
};

export default Todo;
