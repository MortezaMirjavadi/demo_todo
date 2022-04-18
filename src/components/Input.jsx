import {useState} from 'react';
import {useTodoContext} from '../context/useTodoContext';

export default function Input() {
  const {addTodo} = useTodoContext();
  const [value, setValue] = useState('');

  function handleAddItems() {
    addTodo(value);
  }

  return (
    <div className="inputContainer">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add new todo"
      />
      <button className="" onClick={handleAddItems}>
        Add
      </button>
    </div>
  );
}
