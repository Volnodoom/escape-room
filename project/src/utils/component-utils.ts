import { DifficultyLevel, PhonePattern, TitleList, UNKNOWN_DIFFICULTY_TYPE, UNKNOWN_GENRE_TYPE } from 'src/const';
import { Challenge, ChallengeObject } from 'src/types/general.type';

export const adaptDifficultyLevel = (level: string): string => {
  const adaptedValue = DifficultyLevel.find((line) => line.server === level);
  if (adaptedValue) {
    return adaptedValue.ru;
  } else {return UNKNOWN_DIFFICULTY_TYPE;}
};

export const adaptGenre = (genre: string): string => {
  const genres = Object.values(TitleList);
  const adaptedValue = genres.find((line) => line.server === genre);
  if (adaptedValue) {
    return adaptedValue.ru;
  } else {return UNKNOWN_GENRE_TYPE;}
};

export const restructureData = (data: Challenge[]): ChallengeObject => data
  .reduce((previousValue, currentValue) => ({...previousValue, [currentValue.id]: currentValue}), {});

export const checkStatus = (response: Response): void => {
  if(!response.ok) {
    throw response;
  }
};

export const parseResponse = (response: Response): Promise<Challenge[] | Challenge> => response.json();

const isErrorMatchedPattern = (pattern: RegExp) =>
  (value: string):boolean => [...value.matchAll(pattern)].length === 0;

export const matchedErrors =  {
  number: isErrorMatchedPattern(PhonePattern.Number),
  length: isErrorMatchedPattern(PhonePattern.Length),
};
