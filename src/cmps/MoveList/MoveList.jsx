import { connect } from 'react-redux';
import { setUser } from '../../store/actions/userActions.js';

import './MoveList.scss';

const _MoveList = ({ user }) => {
  console.log(user);
  return (
        <div className='move-list'>
            {/* {user.moves.map(move=>move.toId === currContact._id)} */}
        </div>);
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = {
  setUser,
};

export const MoveList = connect(mapStateToProps, mapDispatchToProps)(_MoveList);
