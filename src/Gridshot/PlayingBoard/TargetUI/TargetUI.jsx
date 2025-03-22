import Target from "./Target/Target";
import bulletSound from '../../../assets/shot.mp3'; 

const Targets = ({score, setScore, boardPos}) => { 
  const fireShot = new Audio(bulletSound);
  return (
  <>  
    <Target score={score} setScore={setScore} boardPos={boardPos} fireShot={fireShot}/>
    <Target score={score} setScore={setScore} boardPos={boardPos} fireShot={fireShot}/>
    <Target score={score} setScore={setScore} boardPos={boardPos} fireShot={fireShot}/>
  </>);
}
export default Targets;