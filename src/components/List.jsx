import { Item } from "./Item";
export function List(props) {
  return (
    <ul className="list">
      {props.todos.map((item) => {
        return (
          <Item
            id={item.id}
            title={item.title}
            completed={item.completed}
            key={item.id}
            deleteTodo={props.deleteTodo}
            toggleTodo={props.toggleTodo}
          />
        );
      })}
    </ul>
  );
}
