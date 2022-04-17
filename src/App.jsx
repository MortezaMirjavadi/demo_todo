import {useState, useReducer} from 'react';
import ItemsList from './components/ItemsList';
import './App.css';
import Input from './components/Input';
import useTodo from './hooks/useTodo';
import {ACTION_TYPES, initialState, reducer} from './hooks/useTodoReducer';

const todos = [
  {id: 1, todo: 'Buy milk'},
  {id: 2, todo: 'Sale house'},
  {id: 3, todo: 'Check the weather'},
  {id: 4, todo: 'Go to shop'},
  {id: 5, todo: 'Eat breakfast'},
];

function App() {
  // const {items, addTodo, removeTodo} = useTodo(todos);
  const [state, dispatch] = useReducer(reducer, initialState);

  function addTodo(value) {
    dispatch({type: ACTION_TYPES.ADD, payload: {id: Date.now(), todo: value}});
  }

  function removeTodo(id) {
    dispatch({type: ACTION_TYPES.REMOVE, payload: id});
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <div>
        <Input onAdd={addTodo} />
      </div>
      <div className="mt">
        <ItemsList items={state.todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
