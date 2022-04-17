import {useState} from 'react';

export default function useTodo(todos) {
  const [items, setItems] = useState(todos);

  function addTodo({id, todo}) {
    setItems([...items, {id: Date.now(), todo: {id, todo}}]);
  }

  function removeTodo(id) {
    setItems(items.filter(item => item.id !== id));
  }

  return {
    items,
    addTodo,
    removeTodo,
  };
}
