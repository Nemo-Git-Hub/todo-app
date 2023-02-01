import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <div className="container input-wrapper">
      <div className="row justify-content-center">
        <input
          type="text"
          name="todo"
          className="col input-folder"
          placeholder="Create new task..."
          value={todo}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          className="col-1 input-ok"
          onClick={() => {
            addTodo(todo);
            setTodo("");
          }}
        >
          OK
        </button>
        {todo && (
          <button
            className="col-1 input-clear"
            onClick={() => {
              setTodo("");
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoInput;
