import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import Coins from '../../api/Coins';
import ICoinsActionType from './ActionType';

const getCoins = new Coins();

export const getAllCoinsAction = createAsyncThunk(ICoinsActionType.GetAllCoins, () => {
  return getCoins.getAll();
});

export const setFetching = createAction(ICoinsActionType.SetIsFetching);
export const setCurrentPage = createAction(ICoinsActionType.SetCurrentPage, (page: number) => {
  return {
    payload: {
      page,
    },
  };
});
