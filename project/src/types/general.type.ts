import { Method } from 'src/const';

export type Challenge = {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: string,
  level: string,
  peopleCount: number[],
  duration: number,
}

export type BookingPost = {
  name: string,
  peopleCount: number,
  phone: string,
  isLegal: boolean,
}

export type LoadingType = {
  url: string,
  method?: Method,
  body?: string | null | undefined,
  headers?: Headers,
}

export type ChallengeObject = {[id in number]: Challenge};
