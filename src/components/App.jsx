import { Component } from 'react';
import Section from './SectionTitle/Section.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Notification from './Notification/Notification.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = (a, b, c) => {
    return a + b + c;
  };

  countPositiveFeedbackPercentage = (total, good) => {
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    

    return (

      <Section>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        
        { good || neutral || bad ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        /> : <Notification /> }
      </Section>
    );
  }
}

export default App;
