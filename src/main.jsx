import React, {useReducer} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

// let states = [];
// let calls = -1;

// function useState(initValue) {
//   let callId = ++calls;

//   if (states[callId]) {
//     return states[callId];
//   }

//   const setState = newValue => {
//     states[callId][0] = newValue;
//     render();
//   };

//   const tuple = [initValue, setState];
//   states[callId] = tuple;
//   return tuple;
// }

function useState(init) {
  const [state, dispatch] = useReducer(
    (prev, action) => (typeof action === 'function' ? action(prev) : action),
    init,
  );
  return [state, dispatch];
}

export default function Display() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Pete');

  function changeName() {
    if (name === 'Pete') {
      setName('David');
    } else {
      setName('Pete');
    }
  }

  return (
    <div>
      <h1>Display Component</h1>
      <div>
        Name: {name}
        <button onClick={changeName}>Set Name</button>
      </div>
      <div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
function render() {
  // calls = -1;
  root.render(<Display />);
}
render();
