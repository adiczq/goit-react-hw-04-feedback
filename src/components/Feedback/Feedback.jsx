import { Component } from 'react';
import Section from '../Section/Section';
import Options from '../Options/Options';
import Statistics from '../Statistic/Statistics';
import Notification from '../Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    if (e === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (e === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (e === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  totalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  positivePercentage = () => {
    if (this.totalFeedback() === 0) {
      return 0;
    }
    const { good, bad } = this.state;
    const total = good + bad;

    return Math.round((good / total) * 100);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Options
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleFeedback}
          />{' '}
        </Section>

        <Section title="Statistics">
          {this.totalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
