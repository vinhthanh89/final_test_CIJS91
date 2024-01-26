
import AddTodo from "../AddTodo";
import Todo from "../Todo"
import "./style.css"

const TodoList = ({todos , handleIsComplete , handleAddTodo}) => {

  const renderTodos = todos.map((todo) => {
    return (
      <div className="task" key={todo.id}>
        <Todo
          todo={todo}
          handleIsComplete={handleIsComplete}
        />
      </div>
    );
  });

    return (
        <div className="tasklist">
        <AddTodo handleAddTodo={handleAddTodo} />
        <div className="todo__list">{renderTodos}</div>
      </div>
    )
}

export default TodoList;