import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.css"

const AddTodo = ({handleAddTodo}) => {
    const [newTodo, setNewTodo] = useState({
        id: uuidv4(),
        task: "",
        isCompleted: false,
      });

      const handleChangeTask = (event) => {
        setNewTodo({ ...newTodo, task: event.target.value });
      };

      const handleAddNewTodo = () => {
        handleAddTodo(newTodo);
        setNewTodo({ id: uuidv4(), task: "", isCompleted: false });
      };


    return (
        <div className="tasklist__input">
      <input
        onChange={handleChangeTask}
        value={newTodo.task}
        className="input__addtask"
        placeholder="add details"
        type="text"
      />
      <button onClick={handleAddNewTodo} type="button" className="button btn--add">
        Add
      </button>
    </div>
    )
}

export default AddTodo;