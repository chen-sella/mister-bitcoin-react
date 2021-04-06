import { Component } from 'react';
import { Chart } from '../../cmps/Chart';
import { bitcoinService } from '../../services/bitcoinService';

import './StatisticPage.scss';

export class StatisticPage extends Component {
  state = {
    marketPrice: null,
    confirmedTransactions: null,
  };

  async componentDidMount() {
    const transactionsData = bitcoinService.getConfirmedTransactions();
    const confirmedTransactions = transactionsData.map((coord) => coord.y);
    const data = await bitcoinService.getMarketPrice();
    const marketPrice = data.map((coord) => coord.y);
    this.setState({ marketPrice, confirmedTransactions });
  }
  render() {
    const { marketPrice, confirmedTransactions } = this.state;
    return (
      <div className='main-layout statistic-page'>
        {marketPrice && <Chart data={marketPrice} color='#090951' title='Market Price' />}
        {confirmedTransactions && (
          <Chart data={confirmedTransactions} color='Red' title='Confirmed Transactions Per Day' />
        )}
      </div>
    );
  }
}
