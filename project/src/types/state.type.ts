import { LoadingStatus } from 'src/const';
import { store } from 'src/store/index';
import { BookingPost, ChallengeObject } from './general.type';

export type DataChallengesType = {
  challenges: ChallengeObject  | null,
  theme: string,
  pageType: string,
  loadingStatus: LoadingStatus,
  error: null | string,
}

export type DataBookingType = {
  bookingInfo: BookingPost | null,
  isModalActive: boolean,
  loadingStatus: LoadingStatus,
  error: null | string,
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
