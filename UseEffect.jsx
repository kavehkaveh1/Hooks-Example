import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [state,setState]=useState(0)
  const handleResize = () => {
    setState((p)=>p+1)
    console.log('Window resized:', window.innerWidth, window.innerHeight,state);
  };
  useEffect(() => {

//mount
    window.addEventListener('resize', handleResize);

  //unmont  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth, window.innerHeight,state]); 

  return (
    <div>
      Resize the window and check the console for updates.
    </div>
  );
};

export default UseEffect;
