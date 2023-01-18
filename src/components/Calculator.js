import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const initialState = {
  total: 0,
  next: null,
  operation: null,
};
const Calculator = () => {
  const [state, setState] = useState(initialState);

  const handleClick = (e) => {
    setState(calculate(state, e.target.name));
  };

  const { total, next, operation } = state;
  return (
    <div className="cal-wrapper">
      <p className="cal-text">Let us do some math</p>
    <section className="calculator-container flex-row">
      <div className="output-container flex-row">
        <div className="output">
          <p>{total}</p>
          <p>{operation}</p>
          <p>{next}</p>
        </div>
      </div>
      <div className="gray-container flex-row">
        <button type="button" name="AC" onClick={handleClick} className="gray-button">
          AC
        </button>
        <button type="button" name="+/-" onClick={handleClick} className="gray-button">
          +/-
        </button>
        <button type="button" name="%" onClick={handleClick} className="gray-button">
          %
        </button>
        <button type="button" name="7" onClick={handleClick} className="gray-button">
          7
        </button>
        <button type="button" name="8" onClick={handleClick} className="gray-button">
          8
        </button>
        <button type="button" name="9" onClick={handleClick} className="gray-button">
          9
        </button>
        <button type="button" name="4" onClick={handleClick} className="gray-button">
          4
        </button>
        <button type="button" name="5" onClick={handleClick} className="gray-button">
          5
        </button>
        <button type="button" name="6" onClick={handleClick} className="gray-button">
          6
        </button>
        <button type="button" name="1" onClick={handleClick} className="gray-button">
          1
        </button>
        <button type="button" name="2" onClick={handleClick} className="gray-button">
          2
        </button>
        <button type="button" name="3" onClick={handleClick} className="gray-button">
          3
        </button>
        <button type="button" name="0" onClick={handleClick} className="gray-button zero">
          0
        </button>
        <button type="button" name="." onClick={handleClick} className="gray-button">
          .
        </button>
      </div>
      <div className="orange-container flex-col">
        <button type="button" name="÷" onClick={handleClick} className="orange-button">
          &#247;
        </button>
        <button type="button" name="x" onClick={handleClick} className="orange-button">
          x
        </button>
        <button type="button" name="-" onClick={handleClick} className="orange-button">
          -
        </button>
        <button type="button" name="+" onClick={handleClick} className="orange-button">
          +
        </button>
        <button type="button" name="=" onClick={handleClick} className="orange-button">
          =
        </button>
      </div>
    </section>
    </div>
  );
};

export default Calculator;
