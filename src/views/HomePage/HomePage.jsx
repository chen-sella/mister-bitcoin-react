import { Component } from 'react';
import { bitcoinService } from '../../services/bitcoinService.js';
import { userService } from '../../services/userService.js';

import './HomePage.scss';

export class HomePage extends Component {
  state = {
    user: null,
    bitcoinRate: null,
  };

  async componentDidMount() {
    const user = await userService.getUserById('u101');
    const bitcoinRate = await bitcoinService.getRate(user.coins);
    this.setState({ user, bitcoinRate });
  }
  render() {
    const { user, bitcoinRate } = this.state;
    return (
      user && (
        <div className='flex column align-center main-layout home-page'>
          <h1>Hello, {user.name}!</h1>
          <div className='flex align-center container'>
            <img alt='' src={require('../../assets/img/coins.png').default} />
            <p>
              Coins: <span>{user.coins}</span>
            </p>
          </div>
          <div className='flex align-center container'>
            <img alt='' src={require('../../assets/img/bitcoin.png').default} />
            <p>
              BTC: <span>{bitcoinRate}</span>
            </p>
          </div>
        </div>
      )
    );
  }
}
