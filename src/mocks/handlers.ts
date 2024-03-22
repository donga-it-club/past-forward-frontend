import { http, RequestHandler, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

export const handlers: RequestHandler[] = [
  http.get('/comments', () => {
    const mock = {
      id: 'acb4287',
      like: true,
    };
    return HttpResponse.json(mock);
  }),
];
export const msWorker = setupWorker(...handlers);
