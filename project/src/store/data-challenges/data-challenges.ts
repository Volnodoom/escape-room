import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ALL_GENRE, ApiActions, HeaderTab, LoadingStatus, NameSpace } from 'src/const';
import * as api from 'src/services/api';
import { AppDispatch, DataChallengesType, State } from 'src/types/state.type';
import { checkStatus, parseResponse, restructureData } from 'src/utils/component-utils';

const initialState: DataChallengesType = {
  challenges: null,
  theme: ALL_GENRE,
  pageType: HeaderTab.Quest.linkName,
  loadingStatus: LoadingStatus.Idle,
  error: null,
};

export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
}
>(
  ApiActions.FetchQuests,
  async(_arg, {dispatch}) => {
    try {
      const response = await api.getQuests();
      checkStatus(response);
      const data = await parseResponse(response);

      dispatch(
        setQuests(
          restructureData(data),
        ),
      );
    } catch (error) {
      throw new Error('We have run into some problems with getting data');
    }
  },
);

export const dataChallenges = createSlice({
  name: NameSpace.DataChallenges,
  initialState,
  reducers: {
    setQuests: (state, action) => {
      state.challenges = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setPageType: (state, action) => {
      state.pageType = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.loadingStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers:  (builder) => {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchQuestsAction.fulfilled, (state) => {
        state.loadingStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.loadingStatus = LoadingStatus.Failed;
      });
  },
});

export const {
  setQuests,
  setTheme,
  setLoadingStatus,
  setError,
  setPageType,
} = dataChallenges.actions;
