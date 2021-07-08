import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  /*     state = {
      count: 0,
    }; */

  useEffect(() => {
    // Without the dependency array, the useEffect hook works as componentDidMount(). One time
    // With the dependency array, it will act as the componentDidUpdate(). With each update to the count
    document.title = `We clicked on the counter ${count} times`; // 1. count = 0
    // "We clicked on the counter " + count + " times"

    // A returned function will be called when the component unmounts
    return () => {
      document.title = 'We hid the counter';
    };
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    count && setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button className="decrement-btn" onClick={decrement}>
        -
      </button>
      <span>{count}</span>
      <button className="increment-btn" onClick={increment}>
        +
      </button>
      <br />
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
