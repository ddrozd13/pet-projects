import { configureStore } from '@reduxjs/toolkit';
import { getAllPersonsReducer, getPersonReducer } from './Persons/Reducer';

const store = configureStore({
  reducer: {
   getAll: getAllPersonsReducer,
   getPerson: getPersonReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch