import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiActions, HeaderTab, LoadingStatus, NameSpace, TitleList } from 'src/const';
import * as api from 'src/services/api';
import { handleError } from 'src/services/handle-error';
import { Challenge, ChallengeObject } from 'src/types/general.type';
import { AppDispatch, DataChallengesType, State } from 'src/types/state.type';
import { parseResponse, restructureData } from 'src/utils/component-utils';

const initialState: DataChallengesType = {
  challenges: null,
  theme: TitleList.General.server,
  pageType: HeaderTab.Quest.linkName,
  loadingStatus: LoadingStatus.Idle,
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
      const data = await parseResponse(response) as Challenge[];

      dispatch(
        setQuests(
          restructureData(data),
        ),
      );
    } catch (error) {
      handleError(error);
      throw error;
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
      const data = await parseResponse(response) as Challenge;

      dispatch(
        setQuests(
          {[data.id]: data},
        ),
      );
    } catch (error) {
      handleError(error);
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
  setPageType,
} = dataChallenges.actions;
