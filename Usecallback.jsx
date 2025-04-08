import React, { useState, useCallback } from 'react';

const Usecallback = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = useCallback(() => {
    setItems([...items, inputValue]);
    setInputValue('');
  }, [items, inputValue]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Usecallback;

