import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <section className="calculator-container flex-row">
        <div className="output-container flex-row">
          <p className="output">0</p>
        </div>
        <div className="gray-container flex-row">
          <button type="button" className="gray-button">
            AC
          </button>
          <button type="button" className="gray-button">
            +/-
          </button>
          <button type="button" className="gray-button">
            %
          </button>
          <button type="button" className="gray-button">
            7
          </button>
          <button type="button" className="gray-button">
            8
          </button>
          <button type="button" className="gray-button">
            9
          </button>
          <button type="button" className="gray-button">
            4
          </button>
          <button type="button" className="gray-button">
            5
          </button>
          <button type="button" className="gray-button">
            6
          </button>
          <button type="button" className="gray-button">
            1
          </button>
          <button type="button" className="gray-button">
            2
          </button>
          <button type="button" className="gray-button">
            3
          </button>
          <button type="button" className="gray-button zero">
            0
          </button>
          <button type="button" className="gray-button">
            .
          </button>
        </div>
        <div className="orange-container flex-col">
          <button type="button" className="orange-button">
            &#247;
          </button>
          <button type="button" className="orange-button">
            x
          </button>
          <button type="button" className="orange-button">
            -
          </button>
          <button type="button" className="orange-button">
            +
          </button>
          <button type="button" className="orange-button">
            =
          </button>
        </div>
      </section>
    );
  }
}

export default Calculator;
