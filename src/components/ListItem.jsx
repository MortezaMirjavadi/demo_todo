import {useTodoContext} from '../context/useTodoContext';

export default function ListItem({data: {id, todo}}) {
  const {removeTodo} = useTodoContext();
  return (
    <div className="listItem">
      <div className="todo_content">{todo}</div>
      <div className="remove_button">
        <button onClick={() => removeTodo(id)}>Remove</button>
      </div>
    </div>
  );
}
