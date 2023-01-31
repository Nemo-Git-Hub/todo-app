import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  // console.log(todo);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <div className="row input-wrapper">
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
  );
};

export default TodoInput;
