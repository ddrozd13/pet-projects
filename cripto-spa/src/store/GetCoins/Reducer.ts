import { createReducer } from '@reduxjs/toolkit';
import { getAllCoinsAction } from './ActionCreator';
import { ICoinsState } from './Type';


const initialState: ICoinsState | undefined = {
  coins: undefined,
};

export const getAllCoinsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllCoinsAction.fulfilled, (state, action) => {
    state.coins = action.payload
  });

});
