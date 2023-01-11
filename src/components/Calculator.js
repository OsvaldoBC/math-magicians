import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    this.setState((state) => calculate(state, e.target.name));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <section className="calculator-container flex-row">
        <div className="output-container flex-row">
          <div className="output">
          <p>{total}</p>
          <p>{operation}</p>
          <p>{next}</p>
        </div>
        </div>
        <div className="gray-container flex-row">
          <button type="button" name="AC" onClick={this.handleClick}  className="gray-button">
            AC
          </button>
          <button type="button" name="+/-" onClick={this.handleClick} className="gray-button">
            +/-
          </button>
          <button type="button" name="%" onClick={this.handleClick}  className="gray-button">
            %
          </button>
          <button type="button"  name="7" onClick={this.handleClick} className="gray-button">
            7
          </button>
          <button type="button" name="8" onClick={this.handleClick} className="gray-button">
            8
          </button>
          <button type="button" name="9" onClick={this.handleClick} className="gray-button">
            9
          </button>
          <button type="button" name="4" onClick={this.handleClick} className="gray-button">
            4
          </button>
          <button type="button" name="5" onClick={this.handleClick}  className="gray-button">
            5
          </button>
          <button type="button" name="6" onClick={this.handleClick} className="gray-button">
            6
          </button>
          <button type="button" name="1" onClick={this.handleClick} className="gray-button">
            1
          </button>
          <button type="button" name="2" onClick={this.handleClick} className="gray-button">
            2
          </button>
          <button type="button" name="3" onClick={this.handleClick} className="gray-button">
            3
          </button>
          <button type="button" name="0" onClick={this.handleClick} className="gray-button zero">
            0
          </button>
          <button type="button" name="." onClick={this.handleClick} className="gray-button">
            .
          </button>
        </div>
        <div className="orange-container flex-col">
          <button type="button"name="÷" onClick={this.handleClick} className="orange-button">
            &#247;
          </button>
          <button type="button" name="x" onClick={this.handleClick} className="orange-button">
            x
          </button>
          <button type="button" name="-" onClick={this.handleClick} className="orange-button">
            -
          </button>
          <button type="button" name="+" onClick={this.handleClick} className="orange-button">
            +
          </button>
          <button type="button" name="=" onClick={this.handleClick}  className="orange-button">
            =
          </button>
        </div>
      </section>
    );
  }
}

export default Calculator;
