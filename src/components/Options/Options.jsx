// import s from './Options.css';

const Options = ({ votingData, updateFeedback }) => {
  const btnOptions = Object.keys(votingData);

  return (
    <>
      {btnOptions.map(option => (
        <button key={option} onClick={() => updateFeedback(option)}>
          {option}
        </button>
      ))}
    </>
  );
};

export default Options;
