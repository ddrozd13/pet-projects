import axios from 'axios';
import { ICoin } from './Types';

export default class Coins{
  async getAll(): Promise<ICoin[]> {
    const response = await axios.get('https://api.coincap.io/v2/assets');

    return response.data.data;
  }
}
