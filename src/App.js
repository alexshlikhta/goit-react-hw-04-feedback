import './App.scss';
import { useState } from 'react';
import FeedBackStatistics from './components/FeedBackStatistics';
import FeedbackOptions from './components/FeedbackOptions';
import FeedbackSection from './components/FeedbackSection';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = index => {
    switch (index) {
      case 0:
        setGood(good => good + 1);

        break;

      case 1:
        setNeutral(bad => bad + 1);

        break;

      case 2:
        setBad(bad => bad + 1);

        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return `${((good / countTotalFeedback()) * 100).toFixed(0)}%`;
  };

  return (
    <>
      <FeedbackSection title="Please leave feedback">
        <FeedbackOptions options={[good, neutral, bad]} onLeaveFeedback={onLeaveFeedback} />
      </FeedbackSection>

      <FeedbackSection title="Statistics">
        <FeedBackStatistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </FeedbackSection>
    </>
  );
}
