import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from 'src/const';
import { dataChallenges } from './data-challenges/data-challenges';

export const ReducerRoot = combineReducers({
  [NameSpace.DataChallenges]: dataChallenges.reducer,
  // [NameSpace.DataBooking]: dataBooking.reducer,
});
