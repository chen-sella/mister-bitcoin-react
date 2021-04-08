import './TransferFund.scss';

export const TransferFund = (props) => {

  return (
    <div className='transfer-fund'>
      <h3>Transfer coins to {props.name}</h3>
      <form onSubmit={props.onTransferCoins}>
        <label htmlFor='amount'>Amount:</label>
        <input type='number' name='amount' id='amount' onChange={props.handleChange}/>
        <button>Transfer</button>
      </form>
    </div>
  );
};
