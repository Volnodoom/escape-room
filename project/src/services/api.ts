import { APIRoutes, BACKEND_URL, Method } from 'src/const';
import { BookingPost, LoadingType } from 'src/types/general.type';

const load = async({
  url,
  method = Method.GET,
  body = null,
}: LoadingType ): Promise<Response> =>  await fetch(
  `${BACKEND_URL}${url}`,
  {method, body},
);

export const getQuests = (): Promise<Response> =>
  load({url: APIRoutes.Quests});

export const getOneQuest = (id: number): Promise<Response> =>
  load({url: APIRoutes.Quest(id)});

export const postBooking = (bookingInfo: BookingPost): Promise<Response> =>
  load({
    url: APIRoutes.Booking,
    method: Method.POST,
    body:  JSON.stringify(bookingInfo),
  });
