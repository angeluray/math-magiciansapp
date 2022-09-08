import React, { useState } from 'react';
import calculate from '../logic/calculate'; // eslint-disable-line

// eslint-disable-next-line react/prefer-stateless-function
function MyCalculator() {
  const [myState, mySetStt] = useState({ total: 0, operation: '', next: '' });

  const { total, operation, next } = myState;

  const eventHandlerCalc = (e) => {
    mySetStt((myState) => calculate(myState, e.target.textContent));
  };

  return (
    <div className="calculatorContainer">
        <div className="resultScreen">{(total ? total : '') + (operation ? operation : '') + (next ? next : '')}</div> {/* eslint-disable-line */}
      <div className="calculatorButtons">
        <button type="button" onClick={eventHandlerCalc}>AC</button>
        <button type="button" onClick={eventHandlerCalc}>+/-</button>
        <button type="button" onClick={eventHandlerCalc}>%</button>
        <button type="button" onClick={eventHandlerCalc}>÷</button>
        <button type="button" onClick={eventHandlerCalc}>7</button>
        <button type="button" onClick={eventHandlerCalc}>8</button>
        <button type="button" onClick={eventHandlerCalc}>9</button>
        <button type="button" onClick={eventHandlerCalc}>x</button>
        <button type="button" onClick={eventHandlerCalc}>4</button>
        <button type="button" onClick={eventHandlerCalc}>5</button>
        <button type="button" onClick={eventHandlerCalc}>6</button>
        <button type="button" onClick={eventHandlerCalc}>-</button>
        <button type="button" onClick={eventHandlerCalc}>1</button>
        <button type="button" onClick={eventHandlerCalc}>2</button>
        <button type="button" onClick={eventHandlerCalc}>3</button>
        <button type="button" onClick={eventHandlerCalc}>+</button>
        <button type="button" onClick={eventHandlerCalc}>0</button>
        <button type="button" onClick={eventHandlerCalc}>.</button>
        <button type="button" onClick={eventHandlerCalc}>=</button>
      </div>
    </div>
  );
}

export default MyCalculator;
