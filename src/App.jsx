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

  return (
    <>
      <Description />
      <Options votingData={votingData} updateFeedback={updateFeedback} />
      {totalFeedback !== 0 ? (
        <Feedback votingData={votingData} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
