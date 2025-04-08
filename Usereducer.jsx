import React, { useReducer, useState } from 'react';

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.value };
    case 'decrement':
      return { count: state.count - action.value };
    default:
      throw new Error();
  }
}

// Initial state
const initialState = { count: 0 };

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(1);

  return (
    <div>
      <p>Count: {state.count}</p>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch({ type: 'increment', value: inputValue })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', value: inputValue })}>Decrement</button>
    </div>
  );
}

export default Counter;

