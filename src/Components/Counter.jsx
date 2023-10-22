import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <div className="counter">
          <h1 className="text-primary fw-bold">
            Counter {count}
          </h1>

          <div className="btn-group">
            <button onClick={incrementCounter} className="btn btn-primary me-2">
              Increment
            </button>
            <button onClick={decrementCounter} className="btn btn-danger">
              Decrement
            </button>
          </div>

          {count > 5 ? (
            <h5 className="text-success">Congratulations! Counter is greater than 5.</h5>
          ) : (
            <h5 className="not-yet text-danger">Not yet</h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default Counter;