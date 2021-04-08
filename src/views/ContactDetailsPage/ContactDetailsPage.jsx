import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MoveList } from '../../cmps/MoveList/MoveList.jsx';
import { TransferFund } from '../../cmps/TransferFund/TransferFund.jsx';
import { getContactById } from '../../store/actions/contactActions.js';
import { addMove } from '../../store/actions/userActions.js';

import './ContactDetailsPage.scss';

class _ContactDetailsPage extends Component {
  state = {
    amount: null,
    contactMoves: null,
  };

  componentDidMount() {
    this.loadContact();
    this.contactMoves();
  }

  async loadContact() {
    await this.props.getContactById(this.props.match.params.id);
  }

  onTransferCoins = (ev) => {
    ev.preventDefault();
    this.props.addMove(this.props.contact, this.state.amount, this.props.user._id);
  };

  handleChange = ({ target }) => {
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState({ amount: value });
  };

  contactMoves = () => {
    const contactMoves = this.props.user.moves.filter((move) => move.toId === this.props.contact._id);
    this.setState({ contactMoves });
  };

  render() {
    const { contact } = this.props;
    if (!contact) return <div>Loading contact.....</div>;
    return (
      <div className='flex column align-start contact-details-page'>
        <img src={`https://robohash.org/set_set5/${contact.name}?size=200x200`} alt='' />
        <p>Name: {contact.name}</p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <TransferFund name={contact.name} onTransferCoins={this.onTransferCoins} handleChange={this.handleChange} />
        {this.state.contactMoves && this.state.contactMoves.length > 0 && (
          <MoveList contactMoves={this.state.contactMoves} />
        )}
        <div className='flex align-center justify-center actions'>
          <Link className='flex align-center justify-center' to='/contact'>
            <img title='Back' src={require('../../assets/img/back.png').default} alt='' />
          </Link>
          <Link className='flex align-center justify-center' to={'/contact/edit/' + contact._id}>
            <img title='Edit' src={require('../../assets/img/edit.png').default} alt='' />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contactReducer.currContact,
  user: state.userReducer.user,
});

const mapDispatchToProps = {
  getContactById,
  addMove,
};

export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage);
