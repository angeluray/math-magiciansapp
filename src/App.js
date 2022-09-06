import React from 'react';
import './App.css';
import MyCalculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <MyCalculator />
      </div>
    );
  }
}

export default App;
