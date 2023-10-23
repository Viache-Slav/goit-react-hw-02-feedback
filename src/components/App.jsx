import React, { Component } from 'react';
import  Statistics  from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.changeState('good')}>Good</button>
        <button onClick={() => this.changeState('neutral')}>Neutral</button>
        <button onClick={() => this.changeState('bad')}>Bad</button>

        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default App;