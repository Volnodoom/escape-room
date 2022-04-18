import { configureStore } from '@reduxjs/toolkit';
import { ReducerRoot } from './reducer-root';

export const store = configureStore({
  reducer: ReducerRoot,
});
