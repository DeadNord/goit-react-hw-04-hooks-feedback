import React from 'react';
import FeedbackOptions from './components/feedback/controls/FeedbackOptions';
import Section from './components/feedback/section/Section';
import Statistics from './components/feedback/statistics/Statistics';
import Notification from './components/feedback/notification/Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hiddeStats = true;

  feedbackIncrement = id => {
    this.setState(prevState => ({
      [id]: prevState[id] + 1,
    }));
    this.hiddeStats = false;
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const positiveFeedback = Math.round((this.state.good / total) * 100);
    return positiveFeedback;
  };

  render() {
    const totalValue = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(totalValue);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.feedbackIncrement}
          />
        </Section>
        <Section title="Statistics">
          {this.hiddeStats ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalValue}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
export default Feedback;
