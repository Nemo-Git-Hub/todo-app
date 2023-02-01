import { useState } from "react";

const Todo = ({
  id,
  name,
  isCompleted,
  deleteTodo,
  toggleIsCompleted,
  editTodo,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(name);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      editTodo(id, value);
      setIsEdit(false);
    }
  };

  return (
    <>
      <div className="row container justify-content-between todo">
        {isEdit ? (
          <div className="row container justify-content-center input-wrapper">
            <input
              type="text"
              name="todo"
              className="col-6 input-folder"
              value={value} // todo.name => value
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button
              className="col-1 input-ok"
              onClick={() => {
                editTodo(id, value); //id
                setIsEdit(false);
              }}
            >
              OK
            </button>
          </div>
        ) : (
          <>
            <input
              type="checkbox"
              id={id}
              className={`col-1 ${isCompleted ? "completed" : ""}`}
              checked={isCompleted}
              onChange={() => {
                toggleIsCompleted(id);
              }}
            />
            <label
              for={id}
              className={`col-6 todo-task ${isCompleted ? "completed" : ""}`}
            >
              {name}
            </label>

            <button
              className="col-1 todo-edit"
              onClick={() => {
                setIsEdit(true);
                console.log(isEdit);
              }}
            >
              Edit
            </button>

            <button
              className="col-1 todo-delete"
              onClick={() => {
                deleteTodo(id);
              }}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Todo;
