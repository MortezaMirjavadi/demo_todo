import {useState} from 'react';

export default function Input({onAdd}) {
  const [value, setValue] = useState('');

  function handleAddItems() {
    onAdd(value);
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
