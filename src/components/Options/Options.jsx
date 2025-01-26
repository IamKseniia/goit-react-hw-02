// import s from './Options.css';

const Options = ({ votingData, updateFeedback }) => {
  const btnOptions = Object.keys(votingData);

  return (
    <>
      <ul>
        <li>good: {votingData.good}</li>
        <li>neutral: {votingData.neutral}</li>
        <li>bad: {votingData.bad}</li>
      </ul>
      {btnOptions.map(option => (
        <button key={option} onClick={() => updateFeedback(option)}>
          {option}
        </button>
      ))}
    </>
  );
};

export default Options;
