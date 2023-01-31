import Todo from "./Todo";

const TodoList = ({ list, deleteTodo, toggleIsCompleted }) => {
  return (
    <>
      <div className="todo-list">
        <p>Hello!</p>

        {list.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            toggleIsCompleted={toggleIsCompleted}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
