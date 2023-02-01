import Todo from "./Todo";

const TodoList = ({
  list,
  deleteTodo,
  toggleIsCompleted,
  editTodo,
  deleteCompleted,
  deleteAll,
  sortByCompleted,
}) => {
  return (
    <>
      <div className="todo-list container">
        <p>
          <div className="row justify-content-between">
            <button
              className="col-3 sort-by-completed"
              onClick={() => {
                sortByCompleted();
              }}
            >
              Sort
            </button>
            <button
              className="col-3 delete-completed"
              onClick={() => {
                deleteCompleted();
              }}
            >
              Delete Completed
            </button>
            <button
              className="col-3 delete-all"
              onClick={() => {
                deleteAll();
              }}
            >
              Delete All
            </button>
          </div>
        </p>
        {list.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            toggleIsCompleted={toggleIsCompleted}
            editTodo={editTodo}
            deleteCompleted={deleteCompleted}
            sortByCompleted={sortByCompleted}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
