import { useState } from "react";
import logo from "./logo.svg";
import { nanoid } from "nanoid";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
// import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoValue) => {
    setTodos([
      ...todos,
      { id: nanoid(), name: todoValue, isComlete: false, isEdit: false },
    ]);
  };
  console.log(todos);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TODO List on React.JS</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section className="todo-input">
        <TodoInput addTodo={addTodo} />
      </section>
      <section className="todo-list">
        <TodoList list={todos} />
        {/* {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))} */}
        {/* <li>
          {todos.map(() => {
            [todos.name];
          })}
        </li> */}
      </section>
    </div>
  );
}

export default App;
