import axios from 'axios';
import { ICoin, IIntervalCoin } from './Types';

export default class Coins{
  async getAll(): Promise<ICoin[]> {
    const response = await axios.get('https://api.coincap.io/v2/assets');

    return response.data.data;
  };

  async getInterval(coin: string | undefined): Promise<IIntervalCoin[]> {
    const response = await axios.get(`https://api.coincap.io/v2/assets/${coin}/history?interval=d1`);

    return response.data.data;
  };
}
