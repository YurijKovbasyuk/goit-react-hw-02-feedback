import css from './button.module.css';
import React, { Component } from 'react';

class Button extends Component {
  handleGood() {
    console.log('Good');
  }
  render() {
    return (
      <div className={css.button}>
        <button
          type="button"
          onClick={() => {
            this.handleGood();
          }}
        >
          Good
        </button>
        <button
          type="button"
          onClick={() => {
            console.log('Neutral');
          }}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            console.log('Bad');
          }}
        >
          Bad
        </button>
      </div>
    );
  }
}

export default Button;
