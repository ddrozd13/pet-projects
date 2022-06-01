import { createAsyncThunk } from '@reduxjs/toolkit';
import Coins from '../../api/Coins';
import IIntervalActionType from './ActionType';

const getCoinInfo = new Coins();

export const getIntervalAction = createAsyncThunk(IIntervalActionType.GetInterval, (coin: string) => {
  return getCoinInfo.getInterval(coin)
});
