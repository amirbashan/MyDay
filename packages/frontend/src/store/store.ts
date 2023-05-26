import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './slices/generalSlice';

export const store = configureStore({
  reducer: {
    general: generalReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
});

export type RootState = ReturnType<typeof store.getState>;

export type TypeDispatchAction = { payload: any; type: string };
