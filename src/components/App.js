import React from 'react';
import '../App.css';
import MyCalculator from './Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>Let's do some math!</h1>
        <MyCalculator />
      </div>
    );
  }
}

export default App;
