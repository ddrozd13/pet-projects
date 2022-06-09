import { createReducer } from '@reduxjs/toolkit'
import { getIntervalAction } from './ActionCreator'
import { IIntervalState } from './Type';

const initialState: IIntervalState = {
  intervals: undefined,
};

export const getIntervalReducer = createReducer(initialState, (builder) => {
  builder.addCase(getIntervalAction.fulfilled, (state, action) => {
    state.intervals = action.payload;
  });
});