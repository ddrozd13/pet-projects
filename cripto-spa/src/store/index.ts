import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { getAllCoinsReducer } from './GetCoins/Reducer';
import { getIntervalReducer } from './getInterval/Reducer';

const store = configureStore({
  reducer: {
    allCoins: getAllCoinsReducer,
    interval: getIntervalReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
