import { LoadingStatus } from 'src/const';
import { Challenge } from 'src/types/general.type';
import { State } from 'src/types/state.type';

export const getChallenges = (state: State): Challenge[] => {
  const data = state.DATA_CHALLENGES.challenges;
  if(!data) {
    return [];
  }
  const result = Object.keys(data)
    .map((value) => Number(value))
    .map((key) => data[key]);
  return result;
};

export const getSpecificChallenge = (id: number) => (state: State): Challenge | null =>   {
  const data = state.DATA_CHALLENGES.challenges;
  if (data) {
    return data[id] ? data[id] : null;
  } else {
    return null;
  }
};

export const getChallengesLoadingStatus = (state: State): LoadingStatus => state.DATA_CHALLENGES.loadingStatus;
export const getTheme = (state: State): string => state.DATA_CHALLENGES.theme;
export const getPageType = (state: State): string => state.DATA_CHALLENGES.pageType;
