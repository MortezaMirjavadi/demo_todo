import ListItem from './ListItem';
import {useTodoContext} from '../context/useTodoContext';

export default function ItemsList() {
  const {
    state: {todos},
  } = useTodoContext();

  return (
    <div className="listContainer">
      {todos.length > 0 &&
        todos.map(item => <ListItem key={item.id} data={item} />)}
    </div>
  );
}
