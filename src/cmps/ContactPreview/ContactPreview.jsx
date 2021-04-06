import { Link } from 'react-router-dom';
import './ContactPreview.scss';

export function ContactPreview({ contact }) {
  return (
    <Link to={'/contact/' + contact._id}>
      <li className='flex align-center contact-preview'>
        {/* <img src={require('../../assets/img/user.png').default} alt='#' /> */}
        <img src={`https://robohash.org/set_set5/${contact.name}?size=200x200`} alt='' />
        <p>{contact.name}</p>
      </li>
    </Link>
  );
}
