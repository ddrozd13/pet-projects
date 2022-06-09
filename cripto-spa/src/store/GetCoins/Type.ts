import { ICoin } from '../../api/Types';

export interface ICoinsState {
  coins?: ICoin[];
  currentPage: number;
  perPage: number;
  totalCount: number;
};