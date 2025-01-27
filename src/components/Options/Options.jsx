import s from './Options.module.css';

const Options = ({
  votingData,
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) => {
  const btnOptions = Object.keys(votingData);

  return (
    <div className={s.container}>
      {btnOptions.map(option => (
        <button
          className={s.button}
          key={option}
          onClick={() => updateFeedback(option)}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={s.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
