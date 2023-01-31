const Todo = ({ id, name, isCompleted, deleteTodo }) => {
  // const handleDelete = () => {

  // }
  return (
    <>
      <li>{name}</li>
      <button
        className="todo-delete"
        onClick={(e) => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Todo;
