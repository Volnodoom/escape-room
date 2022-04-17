export const UNKNOWN_DIFFICULTY_TYPE = 'Неизвестный уровень сложности';
export const UNKNOWN_GENRE_TYPE = 'Неизвестный жанр';
export const AllGenre = 'Все квесты';
const LINK_PLUG = '#';

export const AppRoutes = {
  Quest: (id: number | string = ':id'): string => `/detailed-quest/${id}`,
  Contacts: '/contacts',
  Main: '/',
  NotAvailable: '*',
};

export const TitleList = {
  Adventures: {ru: 'Приключения', server: 'adventures'},
  Horror: {ru: 'Ужасы', server: 'horror'},
  Mystic: {ru: 'Мистика', server: 'mystic'},
  Detectives: {ru: 'Детектив', server: 'detective'},
  SciFi: {ru: 'Sci-fi', server: 'sci-fi'},
};

export const DifficultyLevel = [
  {server: 'easy', ru: 'простой'},
  {server: 'medium', ru: 'средний'},
  {server: 'hard', ru: 'сложный'},

];

export const HeaderTab = {
  Quest: {
    title: 'Квесты',
    link: AppRoutes.Main,
    linkName: 'Quest',
  },
  Newby: {
    title: 'Новичкам',
    link: LINK_PLUG,
    linkName: 'Newby',
  },
  Reviews: {
    title: 'Отзывы',
    link: LINK_PLUG,
    linkName: 'Reviews',
  },
  Specials: {
    title: 'Акции',
    link: LINK_PLUG,
    linkName: 'Specials',
  },
  Contacts: {
    title: 'Контакты',
    link: AppRoutes.Contacts,
    linkName: 'Contacts',
  },
};
