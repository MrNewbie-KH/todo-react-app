import "./styles.css";
import { useState } from "react";
function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  // console.log(newItem);
  // console.log(todos);
  // Submit item to the list
  const submitItem = function (e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  };
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
      <form onSubmit={submitItem} className="item-form">
        <div className="form-row">
          <label htmlFor="item">New Challenge</label>
          <input
            value={newItem}
            onChange={(element) => setNewItem(element.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((item) => {
          return (
            <li key={item.id}>
              {" "}
              {/* adding key*/}
              <label>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={(e) => {
                    toggleTodo(item.id, e.target.checked);
                  }}
                />
                {item.title}
              </label>
              <button
                className="btn btn-delete"
                onClick={() => {
                  deleteTodo(item.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default App;
