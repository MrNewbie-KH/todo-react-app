import "./styles.css";
function App() {
  return (
    <>
      <form className="item-form">
        <div className="form-row">
          <label htmlFor="item">New Challenge</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            item1
          </label>
          <button className="btn btn-delete">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            item1
          </label>
          <button className="btn btn-delete">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            item1
          </label>
          <button className="btn btn-delete">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            item1
          </label>
          <button className="btn btn-delete">Delete</button>
        </li>
      </ul>
    </>
  );
}
export default App;
