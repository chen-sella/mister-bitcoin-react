import { NavLink } from 'react-router-dom';
import './AppHeader.scss';

export function AppHeader() {
  return (
    <div className='flex align-center space-between app-header'>
      <h1>Digital Wallet</h1>
      <ul className="flex clean-list">
        <li className="flex align-center justify-center">
          <NavLink activeClassName='active' exact to='/'>
            <img title="Home" src={require('../../assets/img/home.png').default} alt=''></img>
          </NavLink>
        </li>
        <li className="flex align-center justify-center">
          <NavLink activeClassName='active' to='/contact'>
          <img title="Contacts" src={require('../../assets/img/contacts.png').default} alt=''></img>
          </NavLink>
        </li>
        <li className="flex align-center justify-center">
          <NavLink activeClassName='active' to='/signup'>
          <img title="Signup" src={require('../../assets/img/add-user.png').default} alt=''></img>
          </NavLink>
        </li>
        <li className="flex align-center justify-center">
          <NavLink activeClassName='active' to='/statistic'>
          <img title="Statistic" src={require('../../assets/img/chart.png').default} alt=''></img>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
