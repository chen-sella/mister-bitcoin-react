import { Component } from 'react';
import { connect } from 'react-redux';
import { bitcoinService } from '../../services/bitcoinService.js';
import { setUser } from '../../store/actions/userActions.js';

import './HomePage.scss';

class _HomePage extends Component {
  state = {
    bitcoinRate: null,
  };

  async componentDidMount() {
    await this.props.setUser();
    const bitcoinRate = await bitcoinService.getRate(this.props.user.coins);
    this.setState({ bitcoinRate });
  }

  render() {
    const { user } = this.props;
    if (!user) return <div>Loading...</div>;
    return (
      <section className='main-layout home-page'>
        <div className='flex column align-center main-layout home-page-content'>
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
              BTC: <span>{this.state.bitcoinRate}</span>
            </p>
          </div>
        </div>
        <img className='bgc-img' src={require('../../assets/img/19197539.jpg').default} alt='' />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = {
  setUser,
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage);
