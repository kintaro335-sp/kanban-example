import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const useDispatch = () => useReduxDispatch();

export { store, useSelector, useDispatch };
