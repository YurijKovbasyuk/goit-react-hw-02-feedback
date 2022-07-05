import React from 'react';
import css from './statistcs.module.css';

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <div>
      <p className={css.statistic}>Statistcs</p>
      <ul className={css.counter}>
        <li>
          Good:<span>{good}</span>
        </li>
        <li>
          Neutral:<span>{neutral}</span>
        </li>
        <li>
          Bad:<span>{bad}</span>
        </li>
        <li>
          Total:<span>{total}</span>
        </li>
        <li>
          Positive feedback:
          <span>{Math.round((good * 100) / total)}%</span>
        </li>
      </ul>
    </div>
  );
};
export default Statistics;