import './MovePreview.scss';

export const MovePreview = ({move}) => {
  return (
    <li className='move-preview'>
      <p>At: {new Date(move.at).toLocaleDateString()}</p>
      <p>Amount: {move.amount} coins</p>
    </li>
  );
};
