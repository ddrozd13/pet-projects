export interface ICoin{
  id: string;
  rank: number;
  symbol: string;
  name: string;
  supply: number;
  maxSupply: number;
  marketCapUsd: number;
  volumeUsd24Hr: number;
  priceUsd: number;
  changePercent24Hr: number;
  vwap24Hr: number;
  explorer: string;
}

export interface IIntervalCoin {
  priceUsd: number;
  time: Date;
  date: Date;
}

export interface IIntervalCoinPromise{
  data: IIntervalCoin[]
}