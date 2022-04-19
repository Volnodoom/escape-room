import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AllGenre, ApiActions, HeaderTab, LoadingStatus, NameSpace } from 'src/const';
import * as api from 'src/services/api';
import { Challenge, ChallengeObject } from 'src/types/general.type';
import { AppDispatch, DataChallengesType, State } from 'src/types/state.type';
import { checkStatus, parseResponse, restructureData } from 'src/utils/component-utils';

const initialState: DataChallengesType = {
  challenges: null,
  theme: AllGenre.server,
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
      const data = await parseResponse(response) as Challenge[];

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


export const fetchOneQuesAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
}
>(
  ApiActions.FetchOneQuests,
  async(id:number, {dispatch}) => {
    try {
      const response = await api.getOneQuest(id);
      checkStatus(response);
      const data = await parseResponse(response) as Challenge;

      dispatch(
        setQuests(
          {[data.id]: data},
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
      const update: ChallengeObject = action.payload;
      state.challenges = {
        ...state.challenges,
        ...update,
      };
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setPageType: (state, action) => {
      state.pageType = action.payload;
    },
    setChallengesLoadingStatus: (state, action) => {
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
      })
      .addCase(fetchOneQuesAction.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchOneQuesAction.fulfilled, (state) => {
        state.loadingStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchOneQuesAction.rejected, (state) => {
        state.loadingStatus = LoadingStatus.Failed;
      });
  },
});

export const {
  setQuests,
  setTheme,
  setChallengesLoadingStatus,
  setError,
  setPageType,
} = dataChallenges.actions;
