import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiActions, LoadingStatus, NameSpace } from 'src/const';
import * as api from 'src/services/api';
import { handleError } from 'src/services/handle-error';
import { BookingPost } from 'src/types/general.type';
import { AppDispatch, DataBookingType, State } from 'src/types/state.type';

const initialState: DataBookingType = {
  bookingInfo: null,
  isModalActive: false,
  loadingStatus: LoadingStatus.Idle,
  error: null,
};

export const fetchBookingOrderAction = createAsyncThunk<void, BookingPost, {
  dispatch: AppDispatch,
  state: State,
}>(
  ApiActions.FetchBookingOrder,
  async(orderData: BookingPost) => {
    try{
      await api.postBooking(orderData);
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

export const dataBooking = createSlice({
  name: NameSpace.DataBooking,
  initialState,
  reducers: {
    setBookingInfo: (state, action) => {
      state.bookingInfo = action.payload;
    },
    setBookingModal: (state, action) => {
      state.isModalActive = action.payload;
    },
    setBookingLoadingStatus: (state, action) => {
      state.loadingStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingOrderAction.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchBookingOrderAction.fulfilled, (state) => {
        state.loadingStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchBookingOrderAction.rejected, (state) => {
        state.loadingStatus = LoadingStatus.Failed;
      });
  },
});

export const {
  setBookingInfo,
  setBookingLoadingStatus,
  setError,
  setBookingModal,
} = dataBooking.actions;
