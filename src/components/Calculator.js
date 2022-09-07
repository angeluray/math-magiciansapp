import React from 'react';
import calculate from '../logic/calculate'; // eslint-disable-line

// eslint-disable-next-line react/prefer-stateless-function
class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.eventHandlerCalc = this.eventHandlerCalc.bind(this);
  }

  eventHandlerCalc(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculatorContainer">
        <div className="resultScreen">{(total ? total : '') + (operation ? operation : '') + (next ? next : '')}</div> {/* eslint-disable-line */}
        <div className="calculatorButtons">
          <button type="button" onClick={this.eventHandlerCalc}>AC</button>
          <button type="button" onClick={this.eventHandlerCalc}>+/-</button>
          <button type="button" onClick={this.eventHandlerCalc}>%</button>
          <button type="button" onClick={this.eventHandlerCalc}>÷</button>
          <button type="button" onClick={this.eventHandlerCalc}>7</button>
          <button type="button" onClick={this.eventHandlerCalc}>8</button>
          <button type="button" onClick={this.eventHandlerCalc}>9</button>
          <button type="button" onClick={this.eventHandlerCalc}>x</button>
          <button type="button" onClick={this.eventHandlerCalc}>4</button>
          <button type="button" onClick={this.eventHandlerCalc}>5</button>
          <button type="button" onClick={this.eventHandlerCalc}>6</button>
          <button type="button" onClick={this.eventHandlerCalc}>-</button>
          <button type="button" onClick={this.eventHandlerCalc}>1</button>
          <button type="button" onClick={this.eventHandlerCalc}>2</button>
          <button type="button" onClick={this.eventHandlerCalc}>3</button>
          <button type="button" onClick={this.eventHandlerCalc}>+</button>
          <button type="button" onClick={this.eventHandlerCalc}>0</button>
          <button type="button" onClick={this.eventHandlerCalc}>.</button>
          <button type="button" onClick={this.eventHandlerCalc}>=</button>
        </div>
      </div>
    );
  }
}

export default MyCalculator;
