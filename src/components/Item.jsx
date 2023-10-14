export function Item(props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={(e) => {
            props.toggleTodo(props.id, e.target.checked);
          }}
        />
        {props.title}
      </label>
      <button
        className="btn btn-delete"
        onClick={() => {
          props.deleteTodo(props.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
