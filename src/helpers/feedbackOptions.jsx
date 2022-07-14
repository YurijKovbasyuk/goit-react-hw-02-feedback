import css from './feedbackOptions.module.css';
import React from 'react';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  onHandleGood: PropTypes.func,
  onHandleNeutral: PropTypes.func,
  onHandleBad: PropTypes.func,

  total: PropTypes.func,
};

export default FeedbackOptions;