import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import Completed from "./Pages/Completed";
import Active from "./Pages/Active";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("dataTodos")) || []
  );

  useEffect(() => {
    localStorage.setItem("dataTodos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleIsComplete = (taskId) => {
    setTodos((prevTodos) =>
      prevTodos.map((taskItem) =>
        taskItem.id === taskId
          ? { ...taskItem, isCompleted: !taskItem.isCompleted }
          : taskItem
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTodos((prevTodos) =>
      prevTodos.filter((taskItem) => taskItem.id !== taskId)
    );
  };

  const handleClearCompleted = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((taskItem) => taskItem.isCompleted === false)
    );
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <TodoList
              todos={todos}
              handleIsComplete={handleIsComplete}
              handleAddTodo={handleAddTodo}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <Completed
              todos={todos}
              handleIsComplete={handleIsComplete}
              handleDeleteTask={handleDeleteTask}
              handleClearCompleted={handleClearCompleted}
            />
          }
        />
        <Route
          path="/active"
          element={
            <Active
              todos={todos}
              handleIsComplete={handleIsComplete}
              handleAddTodo={handleAddTodo}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
