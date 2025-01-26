import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
// import Feedback from './components/Feedback/Feedback.jsx';
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

  return (
    <>
      <Description />
      <Options votingData={votingData} updateFeedback={updateFeedback} />
      {/* <Feedback /> */}
    </>
  );
};

export default App;
