import { APIRoutes, BACKEND_URL, Method } from 'src/const';
import { BookingPost, LoadingType } from 'src/types/general.type';
import { checkStatus } from 'src/utils/component-utils';

const load = async({
  url,
  method = Method.GET,
  body = null,
  headers = new Headers(),
}: LoadingType ): Promise<Response> =>  {

  const response = await fetch(
    `${BACKEND_URL}${url}`,
    {method, body, headers});

  checkStatus(response);
  return response;
};

export const getQuests = (): Promise<Response> =>
  load({url: APIRoutes.Quests});

export const getOneQuest = (id: number): Promise<Response> =>
  load({url: APIRoutes.Quest(id)});

export const postBooking = (bookingInfo: BookingPost): Promise<Response> =>
  load({
    url: APIRoutes.Booking,
    method: Method.POST,
    body:  JSON.stringify(bookingInfo),
    headers: new Headers({'Content-Type': 'application/json;charset=utf-8'}),
  });
