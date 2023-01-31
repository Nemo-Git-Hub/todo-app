import Todo from "./Todo";

const TodoList = ({ list, deleteTodo }) => {
  return (
    <>
      <div className="todo-list">
        <p>Hello!</p>

        {list.map((todo) => (
          <Todo key={todo.id} {...todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
