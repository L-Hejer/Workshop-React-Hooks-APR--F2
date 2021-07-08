import React, { useState } from 'react';

import Counter from './Components/Counter';

import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  //    GETTER      SETTER          HOOK     Initial Value

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    /* this.setState({isVisible: !this.state.isVisible}) */
  };

  return (
    <div className="App">
      <h1>Workshop -- React State</h1>
      <button className="visibility-btn" onClick={toggleVisibility}>
        {isVisible ? 'Hide Counter' : 'Show Counter'}
      </button>
      {isVisible && <Counter />}
    </div>
  );
}

export default App;
