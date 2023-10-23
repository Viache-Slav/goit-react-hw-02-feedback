import React from 'react';
import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad }) => (
  <div className={css.container}>
    <h1>Statistics</h1>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
  </div>
);

export default Statistics;