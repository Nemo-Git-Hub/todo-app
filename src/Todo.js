const Todo = ({ id, name, isCompleted, deleteTodo, toggleIsCompleted }) => {
  return (
    <>
      <div className="row">
        <input
          type="checkbox"
          id={id}
          className={`col-1 ${isCompleted ? "completed" : ""}`}
          checked={isCompleted}
          onChange={() => {
            toggleIsCompleted(id);
          }}
        />
        <li for={id} className="col-6">
          {name}
        </li>
        <button
          className="col-1 todo-delete"
          onClick={() => {
            deleteTodo(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Todo;
