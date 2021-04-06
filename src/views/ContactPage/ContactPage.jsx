import { Component } from 'react';
import { contactService } from '../../services/contactService.js';
import { ContactList } from '../../cmps/ContactList';
import './ContactPage.scss';
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter.jsx';
import { Link } from 'react-router-dom';

export class ContactPage extends Component {
  state = {
    contacts: null,
    term: null,
  };

  componentDidMount() {
    this.loadContacts();
  }

  async loadContacts() {
    const contacts = await contactService.getContacts(this.state.term);
    this.setState({ contacts });
  }

  onChangeFilter = (term) => {
    this.setState({ term }, this.loadContacts);
  };

  render() {
    return (
      <div className='main-layout contact-page'>
        <div className='flex align-center container'>
          <ContactFilter onChangeFilter={this.onChangeFilter} />
          <Link className="flex align-center justify-center" to='/contact/edit'>
            <img title="Create User" src={require('../../assets/img/add-user.png').default} alt='' />
          </Link>
        </div>
        <ContactList contacts={this.state.contacts} onSelectContact={this.props.onSelectContact} />
      </div>
    );
  }
}
