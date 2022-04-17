import { Challenge } from 'src/types/general-types';

export const singlMockData: Challenge = {
  id: 2,
  title: 'Склеп',
  description: 'Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?',
  previewImg: 'img/preview-sklep.jpg',
  coverImg: 'img/cover-sklep.jpg',
  type: 'horror',
  level: 'hard',
  peopleCount: [2, 5],
  duration: 120,
};
