import { Trash } from "react-bootstrap-icons";

import Todo from "../../components/Todo";
import "./style.css";

const Completed = ({ todos, handleIsComplete , handleDeleteTask , handleClearCompleted }) => {
  const taskCompleted = todos.filter((task) => task.isCompleted === true);

  const renderTasksCompleted = taskCompleted.map((todo) => {
    return (
      <div className="task" key={todo.id}>
        <Todo todo={todo} handleIsComplete={handleIsComplete} />
        <div onClick={() => handleDeleteTask(todo.id)}  className="delete"><Trash className="button btn--delete"/></div>
      </div>
    );
  });

  return (
    <div className="tasks__completed-container">
      <div className="todo__list">{renderTasksCompleted}</div>
      <div className="button--clear-container">
        <button
            onClick={handleClearCompleted}
          className="button btn--clear"
        >
          <Trash /> Delete All
        </button>
      </div>
    </div>
  );
};

export default Completed;
