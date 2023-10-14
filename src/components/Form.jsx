import { useState } from "react";
// form component
export function Form({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  // Submit item to the list
  const submitItem = function (e) {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  };
  return (
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
  );
}
