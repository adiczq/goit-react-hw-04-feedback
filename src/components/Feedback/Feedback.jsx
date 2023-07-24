import React, { useState } from 'react';
import Section from '../Section/Section';
import Options from '../Options/Options';
import Statistics from '../Statistic/Statistics';
import Notification from '../Notification/Notification';

const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option.toLowerCase()]: prevFeedback[option.toLowerCase()] + 1,
    }));
  };

  const totalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    const total = totalFeedback();
    if (total === 0) {
      return 0;
    }
    const { good, bad } = feedback;
    return Math.round((good / total) * 100);
  };

  const { good, neutral, bad } = feedback;

  return (
    <div>
      <Section title="Please leave feedback">
        <Options
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
