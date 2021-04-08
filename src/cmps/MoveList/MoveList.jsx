import { MovePreview } from '../MovePreview/MovePreview.jsx';
import './MoveList.scss';

export const MoveList = ({ contactMoves }) => {
  console.log(contactMoves);
  return (
    <section className='move-list'>
      <h2>Your Moves:</h2>
      <ul className='clean-list'>
        {contactMoves.map((move,idx) => (
          <MovePreview move={move} key={idx}></MovePreview>
        ))}
      </ul>
    </section>
  );
};
