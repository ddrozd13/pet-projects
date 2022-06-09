import axios from './api';
import { ICoin, IIntervalCoin } from './Types';

export default class Coins{
  async getAll(): Promise<ICoin[]> {
    const response = await axios.get('assets/');

    return response.data.data;
  };

  async getInterval(coin: string | undefined): Promise<IIntervalCoin[]> {
    const response = await axios.get(`assets/${coin}/history?interval=d1`);

    return response.data.data;
  };
};
