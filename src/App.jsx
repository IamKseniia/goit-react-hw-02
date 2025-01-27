import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Notification from './components/Notification/Notification.jsx';
import { useState } from 'react';

const App = () => {
  const [votingData, setVotingData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    console.log(feedbackType);

    setVotingData(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = votingData.good + votingData.neutral + votingData.bad;

  const resetFeedback = () => {
    setVotingData({ good: 0, neutral: 0, bad: 0 });
  };

  const positiveFeedback = Math.round((votingData.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        votingData={votingData}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          votingData={votingData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
