import { Component } from 'react';
import { Link } from 'react-router-dom';
import { contactService } from '../../services/contactService.js';

import './ContactDetailsPage.scss';

export class ContactDetailsPage extends Component {
  state = {
    contact: null,
  };

  componentDidMount() {
    this.loadRobot();
  }

  async loadRobot() {
    const contact = await contactService.getContactById(this.props.match.params.id);
    this.setState({ contact });
  }

  render() {
    const { contact } = this.state;
    if (!contact) return <div>Loading contact.....</div>;
    return (
      <div className='flex column align-start contact-details-page'>
        <img src={`https://robohash.org/set_set5/${contact.name}?size=200x200`} alt='' />
        <p>Name: {contact.name}</p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
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
