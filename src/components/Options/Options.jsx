// import s from './Options.css';

const Options = ({
  votingData,
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) => {
  const btnOptions = Object.keys(votingData);

  return (
    <>
      {btnOptions.map(option => (
        <button key={option} onClick={() => updateFeedback(option)}>
          {option}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </>
  );
};

export default Options;
