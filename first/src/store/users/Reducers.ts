import { createReducer } from '@reduxjs/toolkit';
import { removeUserAction, setUserAction } from './ActionCreator';
import IUserState from './Type'

const initialState: IUserState = {
  email: null,
  token: null,
  id: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserAction, (state, action) => {
    state.email = action.payload.email;
    state.token = action.payload.token;
    state.id = action.payload.id;
  })
  builder.addCase(removeUserAction, (state) => {
    state.email = null;
    state.id = null;
    state.token = null;
  })
})
