import { useState } from "react";
import logo from "./logo.svg";
import { nanoid } from "nanoid";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const deleteCompleted = () => {
    const newTodos = todos.filter((todo) => {
      return !todo.isCompleted;
    });
    setTodos(newTodos);
  };

  const deleteAll = () => {
    const newTodos = todos.filter((todo) => {
      return !todo.id;
    });
    setTodos(newTodos);
  };

  const addTodo = (todoValue) => {
    setTodos([
      ...todos,
      { id: nanoid(), name: todoValue, isCompleted: false, isEdit: false },
    ]);
  };

  const toggleIsCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const editTodo = (id, value) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: value };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const sortByCompleted = () => {
    const completedAscending = [...todos].sort((a, b) =>
      a.isCompleted > b.isCompleted ? 1 : -1
    );
    completedAscending.map((todo) => {
      return todo;
    });
    setTodos(completedAscending);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TODO List on React.JS
          <a
            className="App-link ms-1"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt="React"
              height="8"
            />
            Learn React
          </a>
        </p>
      </header>
      <section className="todo-input">
        <TodoInput addTodo={addTodo} />
      </section>
      <section className="todo-list">
        <TodoList
          list={todos}
          deleteTodo={deleteTodo}
          toggleIsCompleted={toggleIsCompleted}
          editTodo={editTodo}
          deleteCompleted={deleteCompleted}
          deleteAll={deleteAll}
          sortByCompleted={sortByCompleted}
        />
      </section>
    </div>
  );
}

export default App;
