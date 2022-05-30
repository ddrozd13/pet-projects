import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './users/Reducers';

const store = configureStore({
  reducer: {
    user: userReducer,
  }
});

export default store;