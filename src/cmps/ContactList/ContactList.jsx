import './ContactList.scss';
import { ContactPreview } from '../ContactPreview';

export function ContactList({ contacts, onSelectContact }) {
  return (
    <ul className='clean-list contact-list'>
      {contacts &&
        contacts.map((contact) => (
          <ContactPreview key={contact._id} onSelectContact={onSelectContact} contact={contact} />
        ))}
    </ul>
  );
}
