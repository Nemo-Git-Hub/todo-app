import Todo from "./Todo";

const TodoList = ({ list }) => {
  return (
    <>
      <div className="todo-list">
        <p>Hello!</p>

        {list.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
