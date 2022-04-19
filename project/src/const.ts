export const UNKNOWN_DIFFICULTY_TYPE = 'Неизвестный уровень сложности';
export const UNKNOWN_GENRE_TYPE = 'Неизвестный жанр';
export const BACKEND_URL = 'http://localhost:3001';
export const PIN_SVG = '../img/icon-blip.svg';
export const BAD_REQUEST = 400;
export const UNDEFINED_ERROR = 'Your request run into some problems. Please, check your internet connection and try again.';
const LINK_PLUG = '#';

export const AppRoutes = {
  Quest: (id: number | string = ':id'): string => `/detailed-quest/${id}`,
  Contacts: '/contacts',
  Main: '/',
  NotAvailable: '*',
}  as const;

export const APIRoutes = {
  Quests: '/quests',
  Quest: (id: number | string = ':id'): string => `/quests/${id}`,
  Booking: '/orders',
} as const;

export const TitleList = {
  General: {ru:'Все квесты', server: 'allGenre'},
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

export enum NameSpace {
  DataChallenges = 'DATA_CHALLENGES',
  DataBooking = 'DATA_BOOKING',
}

export enum Method {
  GET = 'GET',
  POST = 'POST',
}

export enum ApiActions {
  FetchQuests = 'quests/fetchQuests',
  FetchOneQuests = 'quests/fetchQuestsOne',
  FetchBookingOrder = 'booking/fetchBookingOrder',
}

export enum LoadingStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export const PhonePattern = {
  Number: new RegExp(/^[0-9]+$/, 'g'),
  Length: new RegExp(/^\d{10}(?!\d)/, 'g'),
};

export const ErrorMessageFormValidation = {
  number: 'Phone number must contain only numbers. Please, correct it.',
  length: 'Phone number length must contain 10 symbols. Please, correct it.',
  positive: 'Number of people must be positive (grater than zero). Please, correct it.',
  noErrors: '',
};

export const MapLocation = {
  lat: 59.968137,
  lng: 30.316263,
  zoom: 15,
};

export const PinOnMap = {
  SizeWidth: 50,
  SizeHeight: 65,
  AnchorWidth: 25,
  AnchorHeight: 65,
};
