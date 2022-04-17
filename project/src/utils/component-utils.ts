import { DifficultyLevel, TitleList, UNKNOWN_DIFFICULTY_TYPE, UNKNOWN_GENRE_TYPE } from 'src/const';

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
