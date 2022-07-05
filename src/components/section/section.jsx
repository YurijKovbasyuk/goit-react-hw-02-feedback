import React, { Component } from 'react';
import css from 'components/section/section.module.css';
import FeedbackOptions from 'helpers/feedbackOptions';
import Statistics from 'components/statistcs/statistcs';
import Notification from 'components/notification/notification';

class Section extends Component {
  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  total = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };
  render() {
    return (
      <div>
        <p className={css}>Please leave feedback</p>
        <FeedbackOptions
          onHandleGood={this.handleGood}
          onHandleNeutral={this.handleNeutral}
          onHandleBad={this.handleBad}
          total={this.total}
        ></FeedbackOptions>
        {this.state.total === 0 ? (
          <Notification message={'There is no feedback'}></Notification>
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
          ></Statistics>
        )}
      </div>
    );
  }
}

export default Section;
