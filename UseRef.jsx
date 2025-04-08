import React, { useState, useRef, useEffect } from 'react';

const UseRef = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
    console.log( "prevCountRef.current" , prevCountRef.current)
  }, [count]);

  return (
    <div>
        {console.log(prevCountRef.current)}
        
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseRef;
