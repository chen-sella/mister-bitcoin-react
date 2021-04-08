import { Component } from 'react';
import { userService } from '../../services/userService';

import './Signup.scss';

export class Signup extends Component {
  state = {
    user: null,
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState((prevState) => ({ user: { ...prevState.user, [field]: value } }));
  };

  signup = async (ev) => {
    ev.preventDefault();
    await userService.signup(this.state.user.name );
    this.props.history.push('/');
  };

  render() {
    return (
      <div className=' main-layout signup-container'>
        <form className='flex column align-center' onSubmit={this.signup}>
          <img src={require('../../assets/img/bitcoin.png').default} alt='' />
          <h3>Please enter your name:</h3>
          <input required type='text' name='name' id='name' onChange={this.handleChange} />
          <button onClick={this.signup}>Signup</button>
        </form>
      </div>
    );
  }
}
