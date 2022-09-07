import React from 'react';
import calculate from '../logic/calculate'; // eslint-disable-line

// I have to remove the calculate disable line when I use the calculate function.

// eslint-disable-next-line react/prefer-stateless-function
class MyCalculator extends React.Component {
  render() {
    return (
      <div className="calculatorContainer">
        <div className="resultScreen">0</div>
        <div className="calculatorButtons">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button">÷</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button">x</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">+</button>
          <button type="button">0</button>
          <button type="button">.</button>
          <button type="button">=</button>
        </div>
      </div>
    );
  }
}

export default MyCalculator;
