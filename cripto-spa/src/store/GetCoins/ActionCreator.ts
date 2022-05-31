import { createAsyncThunk } from '@reduxjs/toolkit';
import Coins from '../../api/Coins';
import ICoinsActionType from './ActionType';

const getCoins = new Coins();

export const getAllCoinsAction = createAsyncThunk(ICoinsActionType.GetAllCoins, () => {
  return getCoins.getAll();
});

