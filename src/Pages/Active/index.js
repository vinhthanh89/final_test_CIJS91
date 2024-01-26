import AddTodo from "../../components/AddTodo";
import Todo from "../../components/Todo";

const Active = ({ todos, handleIsComplete, handleAddTodo }) => {
  const tasksActive = todos.filter((task) => task.isCompleted === false);

  const renderTasksActive = tasksActive.map((todo) => {
    return (
      <div className="task" key={todo.id}>
        <Todo todo={todo} handleIsComplete={handleIsComplete} />
      </div>
    );
  });

  return (
    <div className="task--active-container">
      <AddTodo handleAddTodo={handleAddTodo} />
      <div className="todo__list">{renderTasksActive}</div>
    </div>
  );
};

export default Active;
