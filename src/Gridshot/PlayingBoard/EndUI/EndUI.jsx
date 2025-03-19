import './EndUI.css';

const EndUI = ({ setGameStates, score, setScore }) => {
  const hit = score.point;
  const missed = score.precision - score.point;
  const accuracy = !score.precision ? 100 : Math.floor((score.point / score.precision) * 100);

  const handleRestart = () => {
    setScore({point: 0, precision:0});
    setGameStates('start');
  }

  return (
    <section className="EndUI">
      <section className="result">
        <header>Your Result</header>
        <p>Hits: <span>{hit}</span></p>
        <p>Missed: <span>{missed}</span></p>
        <p>Accuracy: <span>{accuracy}%</span></p>
      </section>
      <button onClick={handleRestart}>Restart</button>
    </section>
  );
};

export default EndUI;
