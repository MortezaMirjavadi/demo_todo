import {useState, useReducer} from 'react';
import ItemsList from './components/ItemsList';
import './App.css';
import Input from './components/Input';
import TodoProvider from './context/useTodoContext';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo</h1>
        <div>
          <Input />
        </div>
        <div className="mt">
          <ItemsList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
