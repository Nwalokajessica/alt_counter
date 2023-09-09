import { useState } from "react";

import {ChevronUp, ChevronsUp, RotateCcw, Hash, ChevronsDown, ChevronDown} from "react-feather"

const Grid = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = amount => {
    setCount(prevCount => prevCount + amount);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleRandomize = () => {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    setCount(randomValue);
  };

  const handleDecrement = amount => {
    setCount(prevCount => prevCount - amount);
  };

  return (
    <div className="grid">
      <div className="row">
        <div className="cellValue">Current value:</div>
      </div>
      <div className="row">
        <div className="count">{count}</div>
      </div>
      <div className="row">
        
      </div>
      <div className="row">
        <button className="cell" onClick={() => handleIncrement(1)}>
          <ChevronUp color="#000"/>
        </button>
        <button className="cell" onClick={() => handleIncrement(10)}>
          <ChevronsUp color="#000"/>
        </button>
        <button className="cell" onClick={handleReset}>
          <RotateCcw color="#000"/>
        </button>
        <button className="cell" onClick={handleRandomize}>
          <Hash color="#000" />
        </button>
        <button className="cell" onClick={() => handleDecrement(10)}>
          <ChevronsDown  color="#000"/>
        </button>
        <button className="cell" onClick={() => handleDecrement(1)}>
          <ChevronDown color="#000"/>
        </button>
      </div>
    </div>
  );
};

export default Grid;
