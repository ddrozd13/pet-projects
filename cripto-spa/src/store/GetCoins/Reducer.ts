import { createReducer } from '@reduxjs/toolkit';
import { getAllCoinsAction, setCurrentPage } from './ActionCreator';
import { ICoinsState } from './Type';


const initialState: ICoinsState | undefined = {
  coins: undefined,
  currentPage: 1,
  perPage: 10,
  totalCount:0
};

export const getAllCoinsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllCoinsAction.fulfilled, (state, action) => {
    state.coins = action.payload
    state.totalCount = action.payload.length
    state.perPage = action.payload.length / 10
  });
  builder.addCase(setCurrentPage, (state, action) => {
    state.currentPage = action.payload.page
  })
});
