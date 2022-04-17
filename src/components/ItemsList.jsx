import ListItem from './ListItem';

export default function ItemsList({items, removeTodo}) {
  return (
    <div className="listContainer">
      {items.length > 0 &&
        items.map(item => {
          return <ListItem key={item.id} data={item} removeTodo={removeTodo} />;
        })}
    </div>
  );
}
