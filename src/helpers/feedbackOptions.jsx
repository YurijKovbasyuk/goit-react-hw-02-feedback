import css from './feedbackOptions.module.css';
import React from 'react';

const FeedbackOptions = ({
  total,
  onHandleGood,
  onHandleNeutral,
  onHandleBad,
}) => {
  return (
    <div className={css.button}>
      <button
        type="button"
        onClick={() => {
          onHandleGood();
          total();
        }}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          onHandleNeutral();
          total();
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          onHandleBad();
          total();
        }}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
