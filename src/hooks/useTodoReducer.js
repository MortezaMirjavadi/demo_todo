const initialState = {
  todos: [
    {id: 1, todo: 'Buy milk'},
    {id: 2, todo: 'Sale house'},
    {id: 3, todo: 'Check the weather'},
    {id: 4, todo: 'Go to shop'},
    {id: 5, todo: 'Eat breakfast'},
  ],
};

const ACTION_TYPES = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return {todos: [...state.todos, action.payload]};
    case ACTION_TYPES.REMOVE:
      return {todos: state.todos.filter(todo => todo.id !== action.payload)};
    default: {
      return state;
    }
  }
}

export {reducer, initialState, ACTION_TYPES};
