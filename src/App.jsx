import "./styles.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  // add todo
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }
  // update todos
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  // delete todo
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
      });
    });
  }
  return (
    <>
      <Form addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
export default App;
