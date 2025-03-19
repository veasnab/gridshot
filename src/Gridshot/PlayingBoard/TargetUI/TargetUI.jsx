import Target from "./Target/Target";
const Targets = ({score, setScore, boardPos}) => (
  <>
    <Target score={score} setScore={setScore} boardPos={boardPos}/>
    <Target score={score} setScore={setScore} boardPos={boardPos}/>
    <Target score={score} setScore={setScore} boardPos={boardPos}/>
  </>
);

export default Targets;