import { LoadingStatus } from 'src/const';
import { State } from 'src/types/state.type';

export const getBookingLoadingStatus = (state: State): LoadingStatus => state.DATA_BOOKING.loadingStatus;
export const getBookingModalStatus = (state: State): boolean => state.DATA_BOOKING.isModalActive;
