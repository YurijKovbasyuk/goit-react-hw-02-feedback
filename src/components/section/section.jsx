import React, { Component } from 'react';
import css from 'components/section/section.module.css';
import FeedbackOptions from 'components/FeedbackOptions/feedbackOptions';
import Statistics from 'components/statistcs/statistcs';
import Notification from 'components/notification/notification';

class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = type => {
    this.setState(prevState => {
      return { [Object.values(type)]: prevState[Object.values(type)] + 1 };
    });
  };

  totalCount = () => {
    const totals = Object.values(this.state);
    return totals.reduce((acc, el) => acc + el, 0);
  };

  render() {
    return (
      <div>
        <p className={css}>Please leave feedback</p>
        <FeedbackOptions
          onBtnClick={this.handleBtnClick}
          options={Object.keys(this.state)}
        />
        {this.totalCount() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalCount}
          />
        )}
      </div>
    );
  }
}

export default Section;
