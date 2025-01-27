// import s from './Feedback.css';

const Feedback = ({ votingData, totalFeedback }) => {
  return (
    <>
      <ul>
        <li>good: {votingData.good}</li>
        <li>neutral: {votingData.neutral}</li>
        <li>bad: {votingData.bad}</li>
        <li>total: {totalFeedback}</li>
      </ul>
    </>
  );
};

export default Feedback;
