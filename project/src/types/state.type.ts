import { LoadingStatus } from 'src/const';
import { store } from 'src/store/index';
import { ChallengeObject } from './general.type';

export type DataChallengesType = {
  challenges: ChallengeObject  | null,
  theme: string,
  pageType: string,
  loadingStatus: LoadingStatus,
}

export type DataBookingType = {
  isModalActive: boolean,
  loadingStatus: LoadingStatus,
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
