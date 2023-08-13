import { useState } from 'react';
import Section from './SectionTitle/Section.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Notification from './Notification/Notification.jsx';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonKeys = { good, neutral, bad };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = (a, b, c) => {
    return a + b + c;
  };

  const countPositiveFeedbackPercentage = (total, good) => {
    return Math.round((good / total) * 100);
  };

  return (
    <Section>
      <FeedbackOptions
        options={Object.keys(buttonKeys)}
        onLeaveFeedback={onLeaveFeedback}
      />

      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </Section>
  );
}

export default App;
