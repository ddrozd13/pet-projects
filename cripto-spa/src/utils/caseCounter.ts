import { round, sum } from 'lodash';
import { ICoin } from '../api/Types';
import { getCoinsFromLS } from './GetCoinToLS'

export const caseCounter = () => {
  const sumCoins: number[] = [];
  getCoinsFromLS().map((item) => sumCoins.push(item.total));

  return round(sum(sumCoins), 2);
};

export const casePercent = () => {
  const sumCoins: number[] = [];
  getCoinsFromLS().map((item) => sumCoins.push(item.percent));

  return round(sum(sumCoins), 2);
};

export const caseDifference = (array: ICoin[] | undefined) => {
  const data = getCoinsFromLS();
  let num = 0;
  let arr: number[] = [];
  array?.forEach((item) => {
    data.forEach((local) => {
      if(item.id === local.id){
        num = (100 * (item.priceUsd - local.price)/local.price);
        arr.push(num);
      };
    });

  });
  return round(sum(arr), 3);
};
