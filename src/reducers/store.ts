import { configureStore } from '@reduxjs/toolkit';
import walletReducers from './features/wallet.reducers';
import userDetailsReducers from './features/userDetails.reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    walletReducers,
    userDetailsReducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
