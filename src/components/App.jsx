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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total === 0 ? 0 : (good / total) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.changeState('good')}>Good</button>
        <button onClick={() => this.changeState('neutral')}>Neutral</button>
        <button onClick={() => this.changeState('bad')}>Bad</button>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;